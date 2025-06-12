import { Component, inject, OnInit } from '@angular/core';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartDisplayComponent } from './components/cart-display/cart-display.component';
import { DessertInterface } from '../shared/models';
import { ProductsServiceService } from './services/products-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AddToCartComponent, CommonModule, CartDisplayComponent]
})
export class AppComponent implements OnInit {
  title = 'Product list';
  Desserts:DessertInterface[] | null = null;
  cartItem: DessertInterface | null = null;


  productService = inject( ProductsServiceService )

  constructor() { };

  ngOnInit(): void {
    this.productService.AllDessertsArray$.subscribe({
      next: ( data ) => {
        this.Desserts = data;
        console.log('all deserts on startup = ', this.Desserts)
      }
    })
  }


  handleAddToCart(dessert: DessertInterface) {
    this.cartItem = dessert;
    console.log('selected dessert = ', this.cartItem)
  }





};
