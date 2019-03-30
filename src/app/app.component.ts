import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  
  showFooter=true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.showFooter=true;
    let self=this;
    window.addEventListener('native.keyboardshow', keyboardShowHandler);
        function keyboardShowHandler(e){
           self.showFooter=false;
        }
        window.addEventListener('native.keyboardhide', keyboardHideHandler);
        function keyboardHideHandler(e){
            self.showFooter=true;
        }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
