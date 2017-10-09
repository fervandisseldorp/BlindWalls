import { Component, OnInit } from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import {MuralService} from '../../services/mural.service';
import {Mural} from '../../models/mural';

@Component({
  selector: 'app-mural-overview',
  templateUrl: './mural-overview.component.html',
  styleUrls: [ './mural-overview.component.css' ]
})

export class MuralOverviewComponent implements OnInit {
  murals: Mural[];
  tempMurals: Mural[];

  constructor(private muralService: MuralService, protected storage: AsyncLocalStorage) { }

  ngOnInit(): void {
    this.storage.getItem('myMurals').subscribe((data: Mural[]) => {
      this.murals = data;
    });
    this.tempMurals = new Array<Mural>();
  }

  search(term: string): void {
    console.log('reached the search');
    this.tempMurals = [];

    this.murals.forEach((m, i) => {
      if (m.title.en === term || m.author === term) {
        this.tempMurals.push(m);
      }
    });
  }

}
