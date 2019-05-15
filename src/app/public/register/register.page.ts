import { Component } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import {AuthenticationService} from '../../api/authentication.service';
import {Storage} from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PasswordValidation } from './PasswordValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

    // fields
    data = {
        email: '',
        password: '' ,
        confirm_pass: '',
        name: '',
    };

    // error
  errors = false;
  error_msg = "";

    // password_confirmation = false;

    registration_form: FormGroup;

    // constructor
    constructor(private Auth: AuthenticationService , public navCtrl: NavController , private storage: Storage , fb: FormBuilder ,  public loadingController: LoadingController) {
        this.registration_form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+@\w+\.\w{2,3})$/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
            'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
            'confirm_pass': ['', Validators.compose([Validators.required])]
          }, {
            validator: PasswordValidation.MatchPassword,
            // updateOn: 'blur'
          }
          );
    }
    // ____________________________________________________
    submitForm() {
        for (let v in this.registration_form.controls) {
        this.registration_form.controls[v].markAsTouched();
        }
        if (this.registration_form.valid) {
        this.register();
        } else {
        }
    };
    // ____________________________________________________
    // will enter guard
    ionViewWillEnter() {
        // check if token set or not
        this.storage.get('token').then((val) => {
            if (val != null) {
                AuthenticationService.User = true;
                this.navCtrl.navigateForward('/members/menu/services');
            }
        });
    }
    // register
    async register() {
        // send request to the web service here
        const loading = await this.loadingController.create({
            message: 'Waiting ....',
        });
        loading.present();
            this.Auth.register(this.data)
            .then(success => {
                AuthenticationService.User = success;
                // @ts-ignore
                this.storage.set('token', success.token);
                // @ts-ignore
                this.storage.set('user_name', success.name);
                this.navCtrl.navigateForward('/members/menu/services');
                loading.dismiss();
            })
            .catch(err => {
                if(err.status == 500){
                    this.error_msg = "THIS E-MAIL ALREADY EXISTS";
                    this.errors=true;
                }
                loading.dismiss();
            });
    }
}
