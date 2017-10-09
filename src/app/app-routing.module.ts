import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MuralDetailComponent} from './components/mural-detail/mural-detail.component';
import {MuralOverviewComponent} from './components/mural-overview/mural-overview.component';
import {MapOverviewComponent} from './components/map-overview/map-overview.component';
import {RoutesOverviewComponent} from './components/routes-overview/routes-overview.component';

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
