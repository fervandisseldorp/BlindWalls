import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MuralDetailComponent} from './mural-detail.component';
import {MuralOverviewComponent} from './mural-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/muraloverview', pathMatch: 'full' },
  { path: 'detail/:id', component: MuralDetailComponent },
  { path: 'muraloverview', component: MuralOverviewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
