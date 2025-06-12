import { Injectable } from '@angular/core';
import DessertData from '../../../public/data.json'
import { BehaviorSubject } from 'rxjs';
import { DessertInterface } from '../../shared/models';



@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  // all deserts array.
  private AllDessertsArray = new BehaviorSubject<DessertInterface[]>([])
  AllDessertsArray$ = this.AllDessertsArray.asObservable()


  constructor() { 
    this.initializeDessertData()
  }


  initializeDessertData() {
    this.AllDessertsArray.next( DessertData )
  }



}
