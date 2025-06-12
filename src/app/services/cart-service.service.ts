import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DessertInterface } from '../../shared/models';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private CartsArray = new BehaviorSubject<DessertInterface[]>([])
  CartsArray$ = this.CartsArray.asObservable()


  constructor() { }

  getCartItem( cartItem: DessertInterface ){
    let currentCartItems = this.CartsArray.getValue();
    let cartItemExists = currentCartItems.find(( item ) => item.name === cartItem.name )
    return cartItemExists
  }


  addToCart( cartItem: DessertInterface ) {
    let cartItemAlreadyExists = this.getCartItem( cartItem )
    if( cartItemAlreadyExists ) {
      // handle logic here later
      console.log('item already exists in cart')
    }
    else {
      console.log('cart item added in service')
      const currentCartItems = this.CartsArray.getValue();
      const updatedCartItems = [...currentCartItems, cartItem];
      this.CartsArray.next( updatedCartItems );
    }
  }


  deleteCartItem( cartItem: DessertInterface ) {
    console.log('delete cart item run');
    const currentCartItems = this.CartsArray.getValue()
    const updatedCartItems = currentCartItems.filter(( cart ) => cart.name !== cartItem.name )
    this.CartsArray.next( updatedCartItems )
  }




}
