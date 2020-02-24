import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KudoTeamPage } from './kudo-team.page';

const routes: Routes = [
  {
    path: '',
    component: KudoTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KudoTeamPageRoutingModule {}
