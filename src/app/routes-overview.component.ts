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

  // Walls for information
  murals: Mural[];

  // List for all routes
  routes: Route[];
  tempRoutes: Mural[] = [];

  generatedRoutes: Array<Array<Mural>> = new Array<Array<Mural>>();
  travelTypes: String[] = [];

  @Output() currentRoute: EventEmitter<number> = new EventEmitter<number>();
  selectedRoute = 0;


  constructor(protected storage: AsyncLocalStorage) {

    this.storage.getItem('myMurals').subscribe((muralsData: Mural[]) => {
      console.log('ROUTER-OVERVIEW: Received muraldata');
      this.murals = muralsData;
    });

    this.storage.getItem('myRoutes').subscribe((routesData: Route[]) => {
      console.log('ROUTER-OVERVIEW: Received routedata');
      this.routes = routesData;
      this.generateRoutes();
    });

  }

  selectRoute(selectedRouteNumber: number) {
    this.selectedRoute = selectedRouteNumber;
    console.log('ROUTES-OVERVIEW: Route changed to: ' + this.selectedRoute);
    this.currentRoute.emit(this.selectedRoute);
  }


  generateRoutes() {
    console.log('REACHED generateRoutes()');

    this.routes.forEach((route, j) => {
      console.log(route);

      this.tempRoutes = [];

      if (route.type === 'walk') {
        this.travelTypes.push('WALKING');
      }else {
        this.travelTypes.push('BICYCLING');
      }

      route.points.forEach((point, k) => {

        if (k === route.points.length) {
          this.tempRoutes = [];
        }

        this.tempRoutes.push(this.murals.find(mural => mural.id === point.muralId));
      });

      console.log('GenerateRoute() - Created Route size: ' + this.tempRoutes.length + ' Pushing to: ' + j);
      this.generatedRoutes.push(this.tempRoutes);

    });
  }



}
