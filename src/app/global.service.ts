import { Injectable } from '@angular/core';
import { Invoice } from './bill.model';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  invoices:Invoice[]=[
    new Invoice(
      '1',
      'https://image.shutterstock.com/image-photo/young-business-man-working-home-600w-1654831870.jpg',
      'Durga Traders',
      'Srivnivas mobiles',
      true,
      2000,
      0,
      5
    ),
    new Invoice(
      '2',
      'https://image.shutterstock.com/image-photo/multiracial-men-medical-gowns-exploring-600w-1086680285.jpg',
      'Durga Traders',
      'Vishnu mobiles',
      true,
      10000,
      1,
      5
    ),
    new Invoice(
      '3',
      'https://image.shutterstock.com/image-photo/fitness-meditation-healthy-lifestyle-concept-600w-1418433128.jpg',
      'Durga Traders',
      'Srivnivas foods',
      true,
      2500,
      5,
      7
    ),
    new Invoice(
      '4',
      'https://image.shutterstock.com/image-photo/businessman-multitasking-600w-510805411.jpg',
      'Durga Traders',
      'Karthik sporting goods',
      true,
      2000,
      5,
      5
    ),
    new Invoice(
      '5',
      'https://image.shutterstock.com/image-photo/happy-millennial-african-american-man-600w-1660490494.jpg',
      'Durga Traders',
      'Srikanth gift shop',
      true,
      5000,
      4,
      10
    ),
  ]
  get invoice(){
    return [...this.invoices];
  }
  getInvoice(id:string){
    return {...this.invoices.find(i=>id===i.id)};
  }
  getInvoiceByName(name:string){
    return [...this.invoices.filter(i=>name===i.senderName)];
  }
  constructor() { }
}
