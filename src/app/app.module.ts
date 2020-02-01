import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppRoutingModule } from './app-routing.module';


  
import { ErrorHandler } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
/*import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';*/



var firebaseConfig = {
  apiKey: "AIzaSyBN-dyc7NGj3E1Enj-LSxT7gZ_Mps1PZts",
  authDomain: "hexagon-9d084.firebaseapp.com",
  databaseURL: "https://hexagon-9d084.firebaseio.com",
  projectId: "hexagon-9d084",
  storageBucket: "hexagon-9d084.appspot.com",
  messagingSenderId: "198238712475",
  appId: "1:198238712475:web:59d456dc94f5057bf34c3e",
  measurementId: "G-88GXJNEQ2V"
};



@NgModule({
  declarations: [
    AppComponent,
    /*LoginPage, 
    RegisterPage, 
    ResetPasswordPage*/
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    /*MyApp,
    HomePage,
   /* LoginPage, 
    RegisterPage, 
    ResetPasswordPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: ErrorHandler},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class AppModule {}
