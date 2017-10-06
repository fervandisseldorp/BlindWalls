import { Component, OnInit } from '@angular/core';

import {MuralService} from './mural.service';
import {Mural} from './mural';

@Component({
  selector: 'app-mural-overview',
  templateUrl: './mural-overview.component.html',
  styleUrls: [ './mural-overview.component.css' ]
})

export class MuralOverviewComponent implements OnInit {
  murals: Mural[];

  constructor(private muralService: MuralService) { }

  ngOnInit(): void {
    this.muralService.getMurals()
      .subscribe((data: Mural[]) => {
          this.murals = data;
        },
        err => console.log(err));
  }
}
