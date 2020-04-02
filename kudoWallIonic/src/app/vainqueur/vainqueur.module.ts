import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VainqueurPageRoutingModule } from './vainqueur-routing.module';

import { VainqueurPage } from './vainqueur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VainqueurPageRoutingModule
  ],
  declarations: [VainqueurPage]
})
export class VainqueurPageModule {}
