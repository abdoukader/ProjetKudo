import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KudowallPageRoutingModule } from './kudowall-routing.module';

import { KudowallPage } from './kudowall.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    KudowallPageRoutingModule
  ],
  declarations: [KudowallPage]
})
export class KudowallPageModule {}
