import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {AuthenticationService} from '../../api/authentication.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  // fields
   data = {
        email: '',
        password: '' ,
    };
  // error
  errors = false;
  error_msg = "";

  login_form: FormGroup;

  // functions
  constructor(private alertController: AlertController , private Auth: AuthenticationService ,
              public navCtrl: NavController , private storage: Storage , fb: FormBuilder) {
                this.login_form = fb.group({
                  'email': [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+@\w+\.\w{2,3})$/)])],
                  'password': [null, Validators.required]
                }, {
                  // updateOn: 'blur'
                });
  }
// ____________________________________________________
submitForm() {
  for (let v in this.login_form.controls) {
    this.login_form.controls[v].markAsTouched();
  }
  if (this.login_form.valid) {
    this.login();
  }
};
  // ____________________________________________________

    ionViewWillEnter() {
        // check if token set or not
        this.storage.get('token').then((val) => {
            if (val != null) {
                AuthenticationService.User = true;
                this.navCtrl.navigateForward('/members/menu/services');
            }
        });
    }
  // login function
    login() {
      // some validation here
        if (this.data.email == null || this.data.email === '') {
        } else {
          // console.log('email is set successfully' + this.data.email);
        }
        // send request to the web service here
        this.Auth.Login(this.data)
            .then(success => {
               AuthenticationService.User = success;
                // @ts-ignore
                if (success) {
                    // @ts-ignore
                    this.storage.set('token', success.token);
                    this.navCtrl.navigateForward('/members/menu/services');
                }
            })
            .catch(err => {
                this.error_msg = "INCORRECT E-MAIL OR PASSWORD, TRY AGAIN";
                this.errors=true;
            });
    }
  // forget password function
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Forget your password?',
      message: 'Enter your e-mail to reset your password:',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Enter your e-mail'
        }],
      buttons: ['Send']
    });
    await alert.present();
  }
}
