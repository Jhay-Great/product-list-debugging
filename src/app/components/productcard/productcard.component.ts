import { Component,Input } from '@angular/core';
import { AddToCartComponent } from '../add-to-cart/add-to-cart.component';
import { Dessert } from '../../../../public/datainterface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productcard',
  imports: [AddToCartComponent,CurrencyPipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent {
  @Input() dessert!:Dessert
}
