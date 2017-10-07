import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AgmCoreModule } from '@agm/core';

import {MuralDetailComponent} from './mural-detail.component';
import {MuralOverviewComponent} from './mural-overview.component';

import {MuralService} from './mural.service';
import {RoutesService } from './routes.service';
import {TokenService} from './token.service';

import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import { MapOverviewComponent } from './map-overview.component';
import { RoutesOverviewComponent } from './routes-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralDetailComponent,
    MuralOverviewComponent,
    MapOverviewComponent,
    RoutesOverviewComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AsyncLocalStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvi0i6XPcncChs6JTfnA9uHa5OmcoXPYI'
    })
  ],
  providers: [
    MuralService,
    RoutesService,
    TokenService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private mapsApi: MapsAPILoader) {}
}
