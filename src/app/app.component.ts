import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from '../app/home/home.page';
/*import { LoginPage } from 'c:/Users/SAMSON OMOJOLA/Desktop/hexagon/src/app/login/login.page';*/
/*import { ResetPasswordPage } from '../app/reset-password/reset-password.page';*/
import { AngularFireAuth } from '@angular/fire/auth';
import { Routes } from '@angular/router';
/*import { RegisterPage } from './register/register.page';*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  /*rootPage:any = LoginPage;*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


   /*routes: Routes = [
    { path: 'login.page', component: LoginPage },
   /* { path: 'register.page', component: RegisterPage },
    { path: 'home.page', component: HomePage },
   /* { path: 'reset-password.page', component: ResetPasswordPage },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
  ];*/

  version: string = "0.7.2";

  appPages = [
      {
          title: 'Home',
          url: '/home/landing',
          icon: '🏠'
      },
      {
          title: 'My Profile',
          url: '/profile',
          icon: '👤'
      },
      {
          title: 'Switch City',
          url: '/settings/set-location',
          icon: '🏙'
},
      {
          title: "Promotions",
          url: "/promotions",
          icon: "💸"
      }
  ];



  ngOnInit() { }

  leaveAReview() { }

  openFacebookProfile() { }

  openInstagramProfile() { }

  openTwitterProfile() { }

  openWebsite() { }


  /*private authObserver = this.afAuth.authState.subscribe(user => {
    if (user) {
        this.rootPage = HomePage;
        this.authObserver.unsubscribe();
    } else {
        this.rootPage = LoginPage;
        this.authObserver.unsubscribe();
    }
});*/

}
