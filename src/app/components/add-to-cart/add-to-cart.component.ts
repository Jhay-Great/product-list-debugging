import { Component,inject,Input, OnInit } from '@angular/core';
import { Dessert } from '../../../../public/datainterface';
import { CartserviceService } from '../../services/cartservice.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})

export class AddToCartComponent implements OnInit{
  isAddedToCart = false;
  quantity = 1;
  cartservice = inject(CartserviceService)
  @Input() dessert!:Dessert

  constructor(){
 
  }

  ngOnInit(): void {
     this.cartservice.cartItemsSub.subscribe(data => 
  {
    const itemFoundIndex = this.cartservice.dessertIndex(this.dessert.name)
    if(itemFoundIndex !== -1){
      this.quantity = data[itemFoundIndex].quantity 
    }
    else{
      this.isAddedToCart = false;
       this.quantity = 1
    }
  }
  )
  }
 

  addToCart() {
    this.isAddedToCart = true;
    this.cartservice.addToCart({name:this.dessert.name,quantity:1,price:this.dessert.price,image:this.dessert.image})
  }

  decreaseProductItem() {
    if (this.quantity <= 1) {
      this.isAddedToCart = false;
      this.cartservice.removeDessertFromCart(this.dessert.name)
      return
    }
    this.quantity--;
    this.cartservice.decreaseQuantity(this.dessert.name)
  }

  increaseProductItem() {
    ++this.quantity;
    this.cartservice.increaseQuantity(this.dessert.name)
  }

};
