import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoixBeneficiairePage } from './choix-beneficiaire.page';

const routes: Routes = [
  {
    path: '',
    component: ChoixBeneficiairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoixBeneficiairePageRoutingModule {}
