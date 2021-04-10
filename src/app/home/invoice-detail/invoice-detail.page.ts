import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Invoice } from 'src/app/bill.model';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.page.html',
  styleUrls: ['./invoice-detail.page.scss'],
})
export class InvoiceDetailPage implements OnInit {
  invoice:Invoice;
  invoices:Invoice[];
  _name:string;
  _id:string;
  constructor(private route :ActivatedRoute,private navCtrl:NavController,private globalService:GlobalService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('invoiceId')){
        this.navCtrl.navigateBack('home/tabs/account');
        return;
      }
      this.invoice= this.globalService.getInvoice(paramMap.get('invoiceId'));
      this._name=this.invoice.recieverName;
      this.invoices=this.globalService.getInvoiceByName(this._name).filter(i=>i.senderName!==this._name);
    })
  }

}
