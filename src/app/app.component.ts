import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

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

}
