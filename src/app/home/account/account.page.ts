import { Component, OnInit } from '@angular/core';
import {Invoice} from '../../bill.model';
import {GlobalService} from '../../global.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  loadedInvoices:Invoice[];
  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.loadedInvoices= this.globalService.invoices;
  }

}
