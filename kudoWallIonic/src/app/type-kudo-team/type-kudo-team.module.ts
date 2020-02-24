import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeKudoTeamPageRoutingModule } from './type-kudo-team-routing.module';

import { TypeKudoTeamPage } from './type-kudo-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeKudoTeamPageRoutingModule
  ],
  declarations: [TypeKudoTeamPage]
})
export class TypeKudoTeamPageModule {}
