import { DessertImages } from "./datainterface";

export interface DessertCartDetails{
    name:string;
    quantity:number;
    price: number;
    image:DessertImages;
}