import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trader-account',
  templateUrl: './trader-account.page.html',
  styleUrls: ['./trader-account.page.scss'],
})
export class TraderAccountPage implements OnInit {
  traderModel: any={
    traderName:'Vishnu electronics',
    bills:[
      {ShipmentName:"redmi note 5",
       Date:'01-02-2020',
       invoiceNumber:'55xHjs',
       amount:55500,
       payment:{
         type:'Installments',
         amountPayed:20000,
         installmentsRemaining:3,
         installments:[{
           date:'03-09-2020',
           amountPayed:12000,
           PaymentMode:'UPI'
         },
        {
          date:'05-10-2020',
          amountPayed:5000,
          paymentMode:'Check'
        },
        {
          date:'21-01-2021',
          amountPayed:3000,
          paymentMode: 'Cash'
        }]


       },
       invoiceImgUrl:"https://www.pexels.com/photo/tax-documents-on-the-table-6863202/"
      },
      {ShipmentName:"one plus 7",
       Date:'01-02-2020',
       invoiceNumber:'55xHjs',
       amount:55500,
       payment:{
         type:'Installments',
         amountPayed:35000,
         installmentsRemaining:5,
         installments:[{
           date:'03-09-2020',
           amountPayed:27000,
           PaymentMode:'UPI'
         },
        {
          date:'05-10-2020',
          amountPayed: 5000,
          paymentMode:'Check'
        },
        {
          date:'21-01-2021',
          amountPayed:3000,
          paymentMode: 'Cash'
        }]
       },
       invoiceImgUrl:"assets/invoice_img"
      },
      {ShipmentName:"Iphone 11",
       Date:'01-02-2020',
       invoiceNumber:'55xHjs',
       amount:20000,
       payment:{
         type:'Single',
         amountPayed:20000,
       },
       invoiceImgUrl:"assets/invoice_img"
      },
      {ShipmentName:"Samsung galaxy fold",
       Date:'01-02-2020',
       invoiceNumber:'55xHjs',
       amount:120300,
       payment:{
         type:'Single',
         amountPayed:120300,
       },
       invoiceImgUrl:"assets/invoice_img"
      }
    ]
  };
  constructor(
  ) { }

  ngOnInit() {
    console.log(this.traderModel)
  }



}
