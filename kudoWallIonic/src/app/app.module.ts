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
import { AuthGuardService} from './services/auth-guard.service';
//import { IonicStorageModule } from '@ionic/storage';
import { InscriptionPageModule } from './pages/inscription/inscription.module';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomePageModule,
    AutoCompleteModule,
    KudowallPageModule,
    InscriptionPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true },

    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptorService, 
       multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
