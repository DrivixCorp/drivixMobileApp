import { Storage } from '@ionic/storage';
import {AlertController, ToastController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatesService } from '../../../api/rates.service';
import { CommentsService } from '../../../api/comments.service';
import { ModalController, NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { MapDirectionModelComponent } from '../../../map-direction-model/map-direction-model.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  token: any;
  workshopObj: any;
  workshop = 'branch';

  comments = [];
  newComment: '';

  rateData = {
    token : null,
    role_id : null,
    stars : 0
  };
  rateRange = Array(5);

  constructor(public navCtrl: NavController, public ratesService: RatesService, private storage: Storage,
              public toastController: ToastController, private route: ActivatedRoute, public alertController: AlertController,
              public commentsService: CommentsService ,  public modalController: ModalController, public actionSheetController: ActionSheetController) {

    this.workshopObj = this.route.snapshot.paramMap.get('workshopObj');
    this.workshopObj = JSON.parse(this.workshopObj);
  }

  async ngOnInit() {
    if(this.workshopObj.my_review != null){
      this.rateData.stars = this.workshopObj.my_review.stars;
    }
    await this.getToken();
    await this.getComments();
  }

  async getToken() {
    await this.storage.get('token').then((val) => {
      if (val != null) {
        this.token = val;
        this.rateData.token = val;
      }
    });
  }

  async submitRating(rateValue) {
    if (this.rateData.stars === 0) {
      this.workshopObj.num_Drivix_review++;
    }
    this.getToken();
    this.rateData.stars = rateValue;
    this.rateData.role_id = this.workshopObj.id;
    await this.ratesService.serviceEstimateReview(this.rateData).then(async data => {
      await this.ratingToast();
    });
  }

  async ratingToast() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Rating Saved Successfully !',
    });
    toast.present();
  }
  
  async showMapModule(lat , long) {
    const modal = await this.modalController.create({
      component: MapDirectionModelComponent,
      componentProps: {
        'destLat': lat,
        'destLong': long
      }
    });
    return await modal.present();
  }

  async getComments() {
    await this.commentsService.getComments(this.workshopObj.id).then(data => {
      this.comments = [];
      for (var n=0; n<data[0].length; n++) {
        if(data[0][n].comment_id == null){
          this.comments.push(data[0][n]);
        }
      }
      console.log(this.comments);
    });
  }
  
  async addComment() {
    let data = [];
    data['token'] = this.token;
    data['comment'] = this.newComment;
    data['role_id'] = this.workshopObj.id;
    await this.commentsService.addComment(data).then(data => {
      this.newComment = '';
      //@ts-ignore
      this.getComments();
    })
  }
  async presentAlertPromptForReply(index) {
    const alert = await this.alertController.create({
      header: 'Reply',
      inputs: [
        {
          type: 'text',
          name: 'comment',
          min: '5',
          max: '400',
          value: '',
          placeholder: 'enter your comment'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit',
          handler: async data => {
            let commentData = [];
            commentData['token'] = this.token;
            commentData['comment'] = data.comment;
            commentData['comment_id'] = this.comments[index].id;
            commentData['role_id'] = this.comments[index].carservice_id;
            await this.commentsService.addReply(commentData).then(async data => {
              await this.getComments();
            })
            await this.addingCommentToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteComment(index) {
    let data = [];
    data['token'] = this.token;
    data['comment_id'] = this.comments[index].id;
    this.comments.splice(index,1);
    await this.commentsService.deleteComment(data).then(async data => {
      await this.deletingCommentToast();
    })
  }
  async deleteReply(comment_index, reply_index) {
    let data = [];
    data['token'] = this.token;
    data['comment_id'] = this.comments[comment_index].replay[reply_index].id;
    this.comments[comment_index].replay.splice(reply_index,1);
    await this.commentsService.deleteComment(data).then(async data => {
      await this.deletingCommentToast();
    })
  }

  async presentAlertPromptForEdit(index) {
    const alert = await this.alertController.create({
      header: 'Edit Comment',
      inputs: [
        {
          type: 'text',
          name: 'comment',
          min: '5',
          max: '400',
          value: this.comments[index].comment,
          placeholder: 'enter your comment'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: async data => {
            let commentData = [];
            commentData['token'] = this.token;
            commentData['comment'] = data.comment;
            commentData['targetCommentID'] = this.comments[index].id;
            this.comments[index].comment = data.comment;
            await this.commentsService.editComment(commentData).then(async data => {
              await this.getComments();
            })
            await this.editingCommentToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlertPromptForEditReply(comment_index, reply_index) {
    const alert = await this.alertController.create({
      header: 'Edit Comment',
      inputs: [
        {
          type: 'text',
          name: 'comment',
          min: '5',
          max: '400',
          value: this.comments[comment_index].replay[reply_index].comment,
          placeholder: 'enter your comment'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Update',
          handler: async data => {
            let commentData = [];
            commentData['token'] = this.token;
            commentData['comment'] = data.comment;
            commentData['targetCommentID'] = this.comments[comment_index].replay[reply_index].id;
            this.comments[comment_index].replay[reply_index].comment = data.comment;
            await this.commentsService.editComment(commentData).then(async data => {
              await this.getComments();
            })
            await this.editingCommentToast();
          }
        }
      ]
    });

    await alert.present();
  }
  
  async addingCommentToast() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Your Reply Added Successfully !',
    });
    toast.present();
  }
  async deletingCommentToast() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Your Comment Deleted Successfully !',
    });
    toast.present();
  }
  async editingCommentToast() {
    const toast = await this.toastController.create({
      duration: 2000,
      position: 'bottom',
      message: 'Your Comment Updated Successfully !',
    });
    toast.present();
  }

  userLike(commentLikes) {
    if(commentLikes !== undefined) {
      for (var n=0; n<commentLikes.length; n++) {
        if(commentLikes[n].userToken == this.token && commentLikes[n].like == 1){
          return true;
        }
      }
    }
    return false;
  }
  userDislike(commentLikes) {
    if(commentLikes !== undefined) {
      for (var n=0; n<commentLikes.length; n++) {
        if(commentLikes[n].userToken == this.token && commentLikes[n].like == 0){
          return true;
        }
      }
    }
    return false;
  }

  async estimateReply(comment_index, reply_index, estimate) {

    const comment_reply = this.comments[comment_index].replay[reply_index];

    // user doesn't have any estimate, so create new one
    if (!this.userLike(comment_reply.commentlikes) && !this.userDislike(comment_reply.commentlikes)) {
      console.log('new comment'+estimate);
      if(estimate == 1)
      //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayLikesCount++;
      else
      //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayDislikesCount++;
      //@ts-ignore
      this.comments[comment_index].replay[reply_index].commentlikes.push({'userToken': this.token, 'like': estimate});
      // new estimate comment
      await this.addCommentEstimate(comment_reply, estimate);
    } else {
      var user_comment_like_index;
      //@ts-ignore
      for (var n = 0; n < this.comments[comment_index].replay[reply_index].commentlikes.length; n++) {
        if (comment_reply.commentlikes[n].userToken == this.token) {
          user_comment_like_index = n;
        }
      }

      //  change from dislike to like
      if (estimate == 1 && this.userDislike(comment_reply.commentlikes)) {
        console.log('change from dislike to like');
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayLikesCount++;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayDislikesCount--;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].commentlikes[user_comment_like_index].like = estimate;
        await this.addCommentEstimate(comment_reply, estimate);
      }
      // remove like
      else if (estimate == 1 && this.userLike(comment_reply.commentlikes)) {
        console.log('remove like');
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayLikesCount--;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].commentlikes.splice(user_comment_like_index, 1);
        await this.deleteCommentEstimate(comment_reply.id);
      }

      //  change from like to dislike
      else if (estimate == 0 && this.userLike(comment_reply.commentlikes)) {
        console.log('#change from dislike to like');
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayLikesCount--;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayDislikesCount++;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].commentlikes[user_comment_like_index].like = estimate;
        await this.addCommentEstimate(comment_reply, estimate);
      }
      // remove dislike
      else if (estimate == 0 && this.userDislike(comment_reply.commentlikes)) {
        console.log('remove dislike');
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].replayDislikesCount--;
        //@ts-ignore
        this.comments[comment_index].replay[reply_index].commentlikes.splice(user_comment_like_index, 1);
        await this.deleteCommentEstimate(comment_reply.id);
      }
    }
  }
  async estimateComment(role_comment, estimate, comment_index) {

    // user doesn't have any estimate, so create new one
    if (!this.userLike(role_comment.commentlikes) && !this.userDislike(role_comment.commentlikes)) {

      if(estimate == 1)
      //@ts-ignore
        this.comments[comment_index].likesCount++;
      else
      //@ts-ignore
        this.comments[comment_index].dislikesCount++;
      //@ts-ignore
      this.comments[comment_index].commentlikes.push({'userToken': this.token, 'like': estimate});
      // new estimate comment
      await this.addCommentEstimate(role_comment, estimate);
    } else {
      var user_comment_like_index;
      //@ts-ignore
      for (var n = 0; n < this.comments[comment_index].commentlikes.length; n++) {
        if (role_comment.commentlikes[n].userToken == this.token) {
          user_comment_like_index = n;
        }
      }

      //  change from dislike to like
      if (estimate == 1 && this.userDislike(role_comment.commentlikes)) {
        //@ts-ignore
        this.comments[comment_index].likesCount++;
        //@ts-ignore
        this.comments[comment_index].dislikesCount--;
        //@ts-ignore
        this.comments[comment_index].commentlikes[user_comment_like_index].like = estimate;
        await this.addCommentEstimate(role_comment, estimate);
      }
      // remove like
      else if (estimate == 1 && this.userLike(role_comment.commentlikes)) {
        //@ts-ignore
        this.comments[comment_index].likesCount--;
        //@ts-ignore
        this.comments[comment_index].commentlikes.splice(user_comment_like_index, 1);
        await this.deleteCommentEstimate(role_comment.id);
      }

      //  change from like to dislike
      else if (estimate == 0 && this.userLike(role_comment.commentlikes)) {
        //@ts-ignore
        this.comments[comment_index].likesCount--;
        //@ts-ignore
        this.comments[comment_index].dislikesCount++;
        //@ts-ignore
        this.comments[comment_index].commentlikes[user_comment_like_index].like = estimate;
        await this
            .addCommentEstimate(role_comment, estimate);
      }
      // remove dislike
      else if (estimate == 0 && this.userDislike(role_comment.commentlikes)) {
        //@ts-ignore
        this.comments[comment_index].dislikesCount--;
        //@ts-ignore
        this.comments[comment_index].commentlikes.splice(user_comment_like_index, 1);
        await this.deleteCommentEstimate(role_comment.id);
      }
    }
  }

  async addCommentEstimate(role_comment, estimate) {
    let data = new Array();
    data['token'] = this.token;
    data['comment_id'] = role_comment.id;
    data['role_id'] = role_comment.carservice_id;
    data['estimate'] = estimate;
    await this.commentsService.addEstimateComment(data).then(data => {
    });
  }
  async deleteCommentEstimate(role_comment_id) {
    let data = new Array();
    data['token'] = this.token;
    data['comment_id'] = role_comment_id;
    this.commentsService.deleteEstimateComment(data).then(data => {
    });
  }

  async presentCommentOperationActionSheet(comment_index) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteComment(comment_index);
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.presentAlertPromptForEdit(comment_index);
        }
      }, {
        text: 'Reply',
        icon: 'return-right',
        handler: () => {
          this.presentAlertPromptForReply(comment_index);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentReplyOperationActionSheet(comment_index, reply_index) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteReply(comment_index, reply_index);
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.presentAlertPromptForEditReply(comment_index, reply_index);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

  async presentReplyActionSheet(comment_index) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Reply',
        icon: 'create',
        handler: () => {
          this.presentAlertPromptForReply(comment_index);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

}
