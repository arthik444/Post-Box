import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraderAccountPageRoutingModule } from './trader-account-routing.module';

import { TraderAccountPage } from './trader-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraderAccountPageRoutingModule
  ],
  declarations: [TraderAccountPage]
})
export class TraderAccountPageModule {}
