import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //making cartItems an obseravble
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems() {
    return this.cartItems$;
  }

  addToCart(item: CartItem): void {
    const currentItems = this.cartItemsSubject.getValue();

    currentItems.push(item);

    this.cartItemsSubject.next(currentItems);
  }
  updateCardItem(name: string, quantity: number) {}
  deleteCartItem(name: string) {}
}
