import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private cartItems: CartItem[] = [];

  //making cartItems an obseravble
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([
    {
      name: 'cheese',
      price: 10,
      quantity: 1,
      image: 'images/image-waffle-thumbnail.jpg',
    },
  ]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems() {
    return this.cartItems$;
  }

  addToCart(item: CartItem): void {}
}
