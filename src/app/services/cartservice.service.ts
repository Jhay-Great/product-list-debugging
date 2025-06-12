import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dessert } from '../../../public/datainterface';
import { DessertCardDetals } from '../../../public/dessertcartdetails';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cartItems = new BehaviorSubject<DessertCardDetals[]>([])
  public cartItemsSub = this.cartItems.asObservable()

  constructor(private http: HttpClient) {
  }

  getDesserts(): Observable<Dessert[]>{
    return this.http.get<Dessert[]>('data.json')
  }

  addToCart(dessert:DessertCardDetals): void{
    const dessertFoundIndex = this.isDessertFoundInCart(dessert)
    if(dessertFoundIndex == -1){
      const items = this.cartItems.value
    this.cartItems.next([...items,dessert])
    }
  }
  isDessertFoundInCart(dessert:DessertCardDetals):number{
    return this.cartItems.getValue().findIndex((element) => element.name == dessert.name )
  }

  increaseQuantity(dessert:string){
    const dessertIndex = this.dessertIndex(dessert)
    const items = this.cartItems.getValue()
    items[dessertIndex].quantity += 1;
    this.cartItems.next([...items])

  }

  decreaseQuantity(dessert:string){
      const dessertIndex = this.dessertIndex(dessert)
    const items = this.cartItems.getValue()
    items[dessertIndex].quantity -= 1;
    this.cartItems.next([...items])

  }

  dessertIndex(dessertname:string){
    return this.cartItems.getValue().findIndex(data => data.name == dessertname)
  }

  removeDessertFromCart(dessertname:string){
    const index = this.dessertIndex(dessertname)
    const items = this.cartItems.getValue()
    items.splice(index,1)
    this.cartItems.next([...items])
  }
}
