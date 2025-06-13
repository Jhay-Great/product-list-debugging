import { Component, Input, inject } from '@angular/core';
import { DessertInterface } from '../../../shared/models';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})   
export class AddToCartComponent {
  isAddedToCart = false;
  quantity = 1;
  total = 1;
  cartService = inject(CartServiceService)

  @Input() itemToAdd!: DessertInterface

  
  calculateItemTotal() {
    return this.quantity * this.itemToAdd.price;
  }


  addToCart() {
    this.isAddedToCart = true;
    this.itemToAdd.quantity = this.quantity;
    this.itemToAdd.total = this.calculateItemTotal();
    this.cartService.addToCart(this.itemToAdd)

  }

  decreaseProductItem() {
    if( this.quantity === 1 ) {
      this.isAddedToCart = false;
    }
    else {
      this.quantity--;
      this.itemToAdd.quantity = this.quantity;
      this.itemToAdd.total = this.calculateItemTotal()
    }
  }

  increaseProductItem() {
    ++this.quantity;
    this.itemToAdd.quantity = this.quantity;
    this.itemToAdd.total = this.calculateItemTotal()
    
  }

};
