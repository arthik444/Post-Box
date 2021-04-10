import { Component, OnInit } from '@angular/core';
import { Invoice } from '../bill.model';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedInvoices:Invoice[];
  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.loadedInvoices= this.globalService.invoices;

  }

}
