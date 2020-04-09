import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VainqueurPage } from './vainqueur.page';

const routes: Routes = [
  {
    path: '',
    component: VainqueurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VainqueurPageRoutingModule {}
