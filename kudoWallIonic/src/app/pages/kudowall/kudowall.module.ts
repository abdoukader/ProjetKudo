import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KudowallPageRoutingModule } from './kudowall-routing.module';

import { KudowallPage } from './kudowall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KudowallPageRoutingModule
  ],
  declarations: [KudowallPage]
})
export class KudowallPageModule {}
