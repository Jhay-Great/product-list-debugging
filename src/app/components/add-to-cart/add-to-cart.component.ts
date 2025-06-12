import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss',
})
export class AddToCartComponent {
  @Output()
  addCardItem = new EventEmitter<number>();

  isAddedToCart = false;
  quantity = 1;

  addToCart() {
    this.isAddedToCart = true;
    this.addCardItem.emit(this.quantity);
  }

  decreaseProductItem() {
    if (this.quantity < 1) {
      this.isAddedToCart = false;
    }
    if (this.quantity >= 1) {
      this.quantity--;
    }
    this.addCardItem.emit(this.quantity);
    if (this.quantity === 0) {
      this.isAddedToCart = false;
      this.quantity = 1;
    }
  }

  increaseProductItem() {
    ++this.quantity;
    this.addCardItem.emit(this.quantity);
  }
}
