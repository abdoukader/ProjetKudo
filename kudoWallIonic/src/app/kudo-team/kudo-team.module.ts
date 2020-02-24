import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KudoTeamPageRoutingModule } from './kudo-team-routing.module';

import { KudoTeamPage } from './kudo-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KudoTeamPageRoutingModule
  ],
  declarations: [KudoTeamPage]
})
export class KudoTeamPageModule {}
