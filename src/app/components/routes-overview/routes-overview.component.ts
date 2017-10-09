import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Mural } from '../../models/mural';
import { Route } from '../../models/route';


@Component({
  selector: 'app-routes-overview',
  templateUrl: './routes-overview.component.html',
  styleUrls: ['./routes-overview.component.css']
})
export class RoutesOverviewComponent implements OnInit {

  // Walls for information
  murals: Mural[];

  // List for all routes
  routes: Route[];
  tempRoutes: Mural[] = [];

  generatedRoutes: Array<Array<Mural>> = new Array<Array<Mural>>();
  travelTypes: String[] = [];

  @Output() currentRoute: EventEmitter<number> = new EventEmitter<number>();
  selectedRoute = 0;


  constructor(protected storage: AsyncLocalStorage) { }

  ngOnInit(): void {
    this.storage.getItem('myMurals').subscribe((muralsData: Mural[]) => {
      this.murals = muralsData;
    });

    this.storage.getItem('myRoutes').subscribe((routesData: Route[]) => {
      this.routes = routesData;
      this.generateRoutes();
    });
  }

  selectRoute(selectedRouteNumber: number) {
    this.selectedRoute = selectedRouteNumber;
    this.currentRoute.emit(this.selectedRoute);
  }


  generateRoutes() {

    this.routes.forEach((route, j) => {

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

        const foundMural = this.murals.find(mural => mural.id === point.muralId);

        if (foundMural !== undefined) {
          this.tempRoutes.push(foundMural);
        }

      });

      this.generatedRoutes.push(this.tempRoutes);

    });
  }



}
