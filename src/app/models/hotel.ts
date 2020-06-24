import { City } from './city';

export class Hotel{
    id:number;
    name:string;
    description:string;
    currentPrice:number;
    stars: number;
    phone: string;
    adress: string;
    quantity: number;
    photoName: string;
    city:City;  
  }