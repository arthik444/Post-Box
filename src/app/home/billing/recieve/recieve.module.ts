import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievePageRoutingModule } from './recieve-routing.module';

import { RecievePage } from './recieve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievePageRoutingModule
  ],
  declarations: [RecievePage]
})
export class RecievePageModule {}
