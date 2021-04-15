import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraderAccountPage } from './trader-account.page';

const routes: Routes = [
  {
    path: '',
    component: TraderAccountPage
  },
  {
    path: ':invoice-detail',
    loadChildren: () => import('./invoice-detail/invoice-detail.module').then( m => m.InvoiceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraderAccountPageRoutingModule {}
