import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoixBeneficiairePageRoutingModule } from './choix-beneficiaire-routing.module';

import { ChoixBeneficiairePage } from './choix-beneficiaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoixBeneficiairePageRoutingModule
  ],
  declarations: [ChoixBeneficiairePage]
})
export class ChoixBeneficiairePageModule {}
