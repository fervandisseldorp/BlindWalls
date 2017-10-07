import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MuralDetailComponent} from './mural-detail.component';
import {MuralOverviewComponent} from './mural-overview.component';
import {MapOverviewComponent} from './map-overview.component';
import {RoutesOverviewComponent} from './routes-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/muraloverview', pathMatch: 'full' },
  { path: 'detail/:id', component: MuralDetailComponent },
  { path: 'muraloverview', component: MuralOverviewComponent },
  { path: 'map', component: MapOverviewComponent},
  { path: 'routes', component: RoutesOverviewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
