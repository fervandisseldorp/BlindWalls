import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {MuralDetailComponent} from './mural-detail.component';
import {MuralService} from './mural.service';
import {MuralOverviewComponent} from './mural-overview.component';

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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    MuralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
