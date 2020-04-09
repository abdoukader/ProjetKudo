import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KudowallStructurePageRoutingModule } from './kudowall-structure-routing.module';

import { KudowallStructurePage } from './kudowall-structure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KudowallStructurePageRoutingModule
  ],
  declarations: [KudowallStructurePage]
})
export class KudowallStructurePageModule {}
