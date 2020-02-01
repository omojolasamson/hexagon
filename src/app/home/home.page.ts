import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AngularFireAuth } from '@angular/fire/auth';
/*import { LoginPage } from '../login/login.page';*/
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  /*logout() {
    return this.afAuth.auth.signOut().then(authData => {
      this.navCtrl.navigateRoot('');  
      /*this.app.getRootNav().setRoot(LoginPage);*/
    /*});
}*/
 
  constructor(public navCtrl: NavController, private router: Router, private cartService: CartService, public afAuth: AngularFireAuth) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }

  removeFromCart(product) {
    this.cartService.removeProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }
}