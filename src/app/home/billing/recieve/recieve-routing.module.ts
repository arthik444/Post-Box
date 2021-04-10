import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecievePage } from './recieve.page';

const routes: Routes = [
  {
    path: '',
    component: RecievePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecievePageRoutingModule {}
