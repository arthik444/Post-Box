import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceDetailPageRoutingModule } from './invoice-detail-routing.module';

import { InvoiceDetailPage } from './invoice-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceDetailPageRoutingModule
  ],
  declarations: [InvoiceDetailPage]
})
export class InvoiceDetailPageModule {}
