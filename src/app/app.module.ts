import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AlertModule} from 'ngx-bootstrap';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AgmCoreModule } from '@agm/core';

import {MuralDetailComponent} from './components/mural-detail/mural-detail.component';
import {MuralOverviewComponent} from './components/mural-overview/mural-overview.component';

import {MuralService} from './services/mural.service';
import {RoutesService } from './services/routes.service';
import {TokenService} from './services/token.service';

import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';
import { RoutesOverviewComponent } from './components/routes-overview/routes-overview.component';
import { DirectionsMapDirective } from './directives/directions-map.directive';

@NgModule({
  declarations: [
    AppComponent,
    MuralDetailComponent,
    MuralOverviewComponent,
    MapOverviewComponent,
    RoutesOverviewComponent,
    DirectionsMapDirective
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
