import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingPage } from './billing.page';

const routes: Routes = [
  {
    path: '',
    component: BillingPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'recieve',
    loadChildren: () => import('./recieve/recieve.module').then( m => m.RecievePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingPageRoutingModule {}
