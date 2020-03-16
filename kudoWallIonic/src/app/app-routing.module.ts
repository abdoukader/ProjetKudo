import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'kudo',loadChildren: './pages/kudo/kudo.module#KudoPageModule'},
  { path: 'kudo/:id', loadChildren: './pages/kudo/kudo.module#KudoPageModule'},
  { path: 'kudo-team/:id', loadChildren: './kudo-team/kudo-team.module#KudoTeamPageModule'},
  { path: 'inscription',loadChildren: './pages/inscription/inscription.module#InscriptionPageModule'},
  { path: 'typeKudo',loadChildren: './pages/TypeKudo/typeKudo.module#TypeKudoPageModule'},
  { path: 'kudowall',loadChildren: './pages/kudowall/kudowall.module#KudowallPageModule'},
  { path: 'choix-beneficiaire', loadChildren: () => import('./choix-beneficiaire/choix-beneficiaire.module').then( m => m.ChoixBeneficiairePageModule) },
  { path: 'type-kudo-team', loadChildren: () => import('./type-kudo-team/type-kudo-team.module').then( m => m.TypeKudoTeamPageModule) },
  {
    path: 'kudo-team',
    loadChildren: () => import('./kudo-team/kudo-team.module').then( m => m.KudoTeamPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
