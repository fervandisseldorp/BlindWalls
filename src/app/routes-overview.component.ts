import {Component, EventEmitter, Output} from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Mural } from './mural';
import { Route } from './route';


@Component({
  selector: 'app-routes-overview',
  templateUrl: './routes-overview.component.html',
  styleUrls: ['./routes-overview.component.css']
})
export class RoutesOverviewComponent {

  murals: Mural[];
  routes: Route[];

  @Output() currentRoute: EventEmitter<number> = new EventEmitter<number>();
  selectedRoute = 0;

  constructor(protected storage: AsyncLocalStorage) {
    this.storage.getItem('myMurals').subscribe((muralsData: Mural[]) => {
      this.murals = muralsData;
    });

    this.storage.getItem('myRoutes').subscribe((routesData: Route[]) => {
      this.routes = routesData;
    });
  }

  selectRoute(selectedRouteNumber: number) {
    this.selectedRoute = selectedRouteNumber;
    this.currentRoute.emit(this.selectedRoute);
  }

}
