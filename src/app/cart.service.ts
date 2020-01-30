import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Main Dish',
      expanded: true,
      products: [
        { id: 0, name: 'Jollof Rice', price: '500', link: 'http://localhost:8100/assets/img/Jollof-rice.jpg' },
        { id: 1, name: 'Fried Rice', price: '500', link: 'http://localhost:8100/assets/img/Fried-rice.jpg' },
        { id: 2, name: 'Mixed', price: '500', link: 'http://localhost:8100/assets/img/Mixed.jpg' }
      ]
    },
    {
      category: 'Side meal',
      products: [
        { id: 4, name: 'Plantain', price: '100', link: 'http://localhost:8100/assets/img/Plantain.jpg' },
        { id: 5, name: 'Moi Moi', price: '100', link: 'http://localhost:8100/assets/img/Moi.jpg' }
      ]
    },
    {
      category: 'Dessert',
      products: [
        { id: 6, name: 'Chicken', price: '600', link: 'http://localhost:8100/assets/img/Chicken.jpg' },
        { id: 7, name: 'Turkey', price: '500', link: 'http://localhost:8100/assets/img/Turkey.jpg' }
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  removeProduct(product){
    this.cart.splice(product);
  }
}