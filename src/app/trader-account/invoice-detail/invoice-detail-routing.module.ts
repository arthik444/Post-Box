import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceDetailPage } from './invoice-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceDetailPageRoutingModule {}
