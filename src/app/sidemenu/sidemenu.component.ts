import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

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

  constructor() { }

  ngOnInit() { }

  leaveAReview() { }

  openFacebookProfile() { }

  openInstagramProfile() { }

  openTwitterProfile() { }

  openWebsite() { }

}
