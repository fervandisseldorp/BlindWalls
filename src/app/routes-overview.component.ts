import {Component, EventEmitter, Output} from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Mural } from './mural';
import { Route, Point } from './route';


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

  // List for all points for selected route
  points: Point[];

  // List for generated route
  generatedRoute: Mural[];

  travelType: String = 'WALK';

  @Output() currentRoute: EventEmitter<number> = new EventEmitter<number>();
  selectedRoute = 0;

  constructor(protected storage: AsyncLocalStorage) {
    this.generatedRoute = new Array();

    this.storage.getItem('myMurals').subscribe((muralsData: Mural[]) => {
      this.murals = muralsData;
    });

    this.storage.getItem('myRoutes').subscribe((routesData: Route[]) => {
      this.routes = routesData;
      this.points = this.routes[this.selectedRoute].points;

      this.generatedRoute = this.generateRoute();
    });


  }

  selectRoute(selectedRouteNumber: number) {
    this.selectedRoute = selectedRouteNumber;
    this.generateRoute();
    this.travelType = this.routes[selectedRouteNumber - 1].type.toUpperCase();
    console.log('Switched Route: ' + selectedRouteNumber + ' Travel type: ' + this.travelType);
    this.currentRoute.emit(this.selectedRoute);
  }

  generateRoute(): Mural[] {
    const tempRoutes = new Array();

    for (const p of this.points){
      tempRoutes.push(this.murals.filter(mural => mural.id === p.muralId)[0]);
    }

    console.log('GenerateRoute() - Created Route size: ' + tempRoutes.length);
    return tempRoutes;
  }



}
