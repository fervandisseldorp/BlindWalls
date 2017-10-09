import { Component, OnInit } from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import {MuralService} from '../../services/mural.service';
import {Mural} from '../../models/mural';

@Component({
  selector: 'app-mural-overview',
  templateUrl: './mural-overview.component.html',
  styleUrls: [ './mural-overview.component.css' ]
})

export class MuralOverviewComponent {
  murals: Mural[];

  constructor(private muralService: MuralService, protected storage: AsyncLocalStorage) {

    this.storage.getItem('myMurals').subscribe((data: Mural[]) => {
      this.murals = data;
    });

  }


}
