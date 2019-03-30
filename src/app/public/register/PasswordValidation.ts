import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirm_pass = AC.get('confirm_pass').value; // to get value in input tag
        if(password != confirm_pass) {
            // console.log('false');
            AC.get('confirm_pass').setErrors( {MatchPassword: true} );
        } else {
            // console.log('true');
        }
    }
}