import { Component, OnInit } from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import { Mural } from '../../models/mural';

@Component({
  selector: 'app-map-overview',
  templateUrl: './map-overview.component.html',
  styleUrls: ['./map-overview.component.css']
})
export class MapOverviewComponent implements OnInit {

  murals: Mural[];

  constructor(protected storage: AsyncLocalStorage) { }

  ngOnInit(): void {
    this.storage.getItem('myMurals').subscribe((data: Mural[]) => {
      this.murals = data;
    });
  }

}
