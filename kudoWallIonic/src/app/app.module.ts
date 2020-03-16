import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { KudowallPageModule } from './pages/kudowall/kudowall.module';
<<<<<<< HEAD
//import {TablePage} from '../app/table/table.module';
=======
import { AuthGuardService} from './services/auth-guard.service';
import { IonicStorageModule } from '@ionic/storage';
import { InscriptionPageModule } from './pages/inscription/inscription.module';

>>>>>>> 5ccfb1afc6741fcca57aacfe70a6f6d7de1da772
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    KudowallPageModule,
    InscriptionPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true }

=======
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptorService, 
       multi:true 
    }
>>>>>>> 5ccfb1afc6741fcca57aacfe70a6f6d7de1da772
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
