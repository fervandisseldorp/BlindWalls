import { Component } from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Mural } from './mural';

@Component({
  selector: 'app-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent {

  murals: Mural[];

  constructor(private storage: AsyncLocalStorage) {
    this.storage.getItem('myMurals').subscribe((data: Mural[]) => {
      this.murals = data;
    });
  }

}
