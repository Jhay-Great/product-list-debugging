import { Component,inject } from '@angular/core';
import { CartserviceService } from '../../services/cartservice.service';
import { DessertCartDetails } from '../../../../public/dessertcartdetails';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productcart',
  imports: [CurrencyPipe],
  templateUrl: './productcart.component.html',
  styleUrl: './productcart.component.scss',
})
export class ProductcartComponent {

 productdata:DessertCartDetails[] = []
 totalItemsCount: number = 0
 totalPrice:number = 0;
 isConfirmed:boolean = false;

  constructor(private cartservice:CartserviceService){
    this.cartservice.cartItemsSub.subscribe(data => {
      this.productdata = data
      this.totalItemsCount = data.reduce((total,item) =>{return total+item.quantity},0)
       data.forEach(item => {
         this.totalPrice+=item.quantity*item.price
      })
 })
  }

 removeDessert(dessertname:string){
 this.cartservice.removeDessertFromCart(dessertname)
 }

 handleOrder(){
  this.isConfirmed = !this.isConfirmed
 }
 handleNewOrder(){
    this.isConfirmed = !this.isConfirmed;
    this.cartservice.clearAllDessertFromCart()
 }

}
