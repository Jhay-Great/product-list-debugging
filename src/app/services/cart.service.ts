import { Injectable } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { BehaviorSubject, filter } from 'rxjs';

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
  updateCardItem(name: string, quantity: number) {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex((item) => item.name === name);
    if (itemIndex !== -1) {
      currentItems[itemIndex].quantity = quantity;
      this.cartItemsSubject.next(currentItems);
    }
  }
  deleteCartItem(name: string) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((item) => item.name !== name);

    this.cartItemsSubject.next(updatedItems);
  }
}
