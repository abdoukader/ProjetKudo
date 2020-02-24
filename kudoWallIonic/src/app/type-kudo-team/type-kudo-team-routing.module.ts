import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeKudoTeamPage } from './type-kudo-team.page';

const routes: Routes = [
  {
    path: '',
    component: TypeKudoTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeKudoTeamPageRoutingModule {}
