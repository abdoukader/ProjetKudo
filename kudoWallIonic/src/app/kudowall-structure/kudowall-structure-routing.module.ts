import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KudowallStructurePage } from './kudowall-structure.page';

const routes: Routes = [
  {
    path: '',
    component: KudowallStructurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KudowallStructurePageRoutingModule {}
