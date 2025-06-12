import { Component, Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Dessert } from '../../../models/dessert';

@Component({
  selector: 'app-product-card',
  imports: [AddToCartComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) dessert!: Dessert;

  onAddCardItem(quantity: number) {
    const quantityNumber = Number(quantity);
    const dessertName = this.dessert.name;
    const dessertPrice = quantity * this.dessert.price;
    const dessertImage = this.dessert.image.thumbnail;
  }
}
