import { Component } from '@angular/core';
import {AuthenticationService} from '../../api/authentication.service';
import {NavController, ToastController } from '@ionic/angular';
import {ProfileService} from '../../api/profile.service';
import {Storage} from '@ionic/storage';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
    Token = null;
    HasProfile = false;
    // obj data
    data = {
        phone: ' ',
        gender: ' ',
        DOB: ' ',
        location: ' ',
        job: ' ',
        token: this.Token,
    };
    
    profile_form: FormGroup;
    fb: FormBuilder;
    
    job: AbstractControl;

  constructor(public navCtrl: NavController , public Profile: ProfileService ,
     private storage: Storage , private toast: ToastController, form_builder: FormBuilder) {
          this.profile_form = form_builder.group({
            'job': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
            'location': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])],
            'gender': [null, Validators.required],
            'phone': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern('/(0)\d{10}/')])],
            'DOB': [null, Validators.required],
          }, {
            // updateOn: 'blur'
          });
  }
    // guard
    ionViewWillEnter() {
        if ( AuthenticationService.check_Auth() === false) {
            this.navCtrl.navigateForward('');
        }
        // get Token
        this.storage.get('token').then((val) => {
            if (val != null) {
                this.Token = val;
                this.getMyProfile();
            }
        });
    }
    getMyProfile() {
        // Profile Service
        this.Profile.Profile(this.Token)
            .then(success => {
                // @ts-ignore
                if (!success.id) {
                    // @ts-ignore
                    this.HasProfile = false;
                } else {
                    // @ts-ignore
                    this.data.phone = success.phone;
                    // @ts-ignore
                    this.data.gender = success.gender;
                    // @ts-ignore
                    this.data.DOB = success.DOB;
                    // @ts-ignore
                    this.data.location = success.location;
                    // @ts-ignore
                    this.data.job = success.job;

                    this.HasProfile = true;
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
    UpdateMyData(action = 'profile') {
       let ProfileUrl = '';
        // set token
        this.data.token = this.Token;
      if (action === 'profile') {
          ProfileUrl = 'addprofile';
      } else {
          ProfileUrl = 'updateprofile/' + this.data.token;
      }
      // call add profile service
        this.Profile.UpdateProfileData(this.data, ProfileUrl)
        .then(async success => {
            // @ts-ignore
            const SuccessToast = await this.toast.create({
                message: 'Your profile updated successfully',
                duration: 2000
            });
            SuccessToast.present();
            if ( ProfileUrl === 'addprofile') {
                document.getElementById('AddProfile').style.display = 'none';
                document.getElementById('UpdateProfile').style.display = 'block';
            }
        })
        .catch(async err => {
            if (err.status === 503) {
                // create toast in case of success
                const Errtoast = await this.toast.create({
                    message: 'Your profile not saved',
                    duration: 2000
                });
                Errtoast.present();
            }
        });
    }
}
