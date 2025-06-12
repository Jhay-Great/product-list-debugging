import { Component,inject } from '@angular/core';
import { CartserviceService } from '../../services/cartservice.service';
import { DessertCardDetals } from '../../../../public/dessertcartdetails';

@Component({
  selector: 'app-productcart',
  imports: [],
  templateUrl: './productcart.component.html',
  styleUrl: './productcart.component.scss',
})
export class ProductcartComponent {

 productdata:DessertCardDetals[] = []
 totalItemsCount: number = 0
 totalPrice:number = 0;

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
  
 }

}
