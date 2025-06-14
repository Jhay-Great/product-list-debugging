import { Component } from '@angular/core';
import { Dessert } from '../../public/datainterface';
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";
import { CartserviceService } from './services/cartservice.service';
import { ProductcartComponent } from './components/productcart/productcart.component';
import { ProductcardComponent } from './components/productcard/productcard.component';

@Component({
  selector: 'app-root',
  imports:[ProductcartComponent,ProductcardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Product list';
  desserts:Dessert[] | null = null;

  constructor(private cartservice: CartserviceService) {
     this.cartservice.getDesserts().subscribe(data => {
      this.desserts = data;
     });
  };
};




