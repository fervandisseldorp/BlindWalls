import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import {MuralDetailComponent} from './mural-detail.component';
import {MuralOverviewComponent} from './mural-overview.component';

import {MuralService} from './mural.service';
import {RoutesService } from './routes.service';
import {TokenService} from './token.service';



@NgModule({
  declarations: [
    AppComponent,
    MuralDetailComponent,
    MuralOverviewComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AsyncLocalStorageModule
  ],
  providers: [
    MuralService,
    RoutesService,
    TokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
