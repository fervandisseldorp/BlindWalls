import { Component, OnInit } from '@angular/core';

import {MuralService} from './mural.service';
import {Mural} from './mural';

@Component({
  selector: 'app-mural-detail',
  templateUrl: './mural-detail.component.html',
  styleUrls: [ './mural-detail.component.css' ]
})

export class MuralDetailComponent implements OnInit {
  murals: Mural[];

  constructor(private muralService: MuralService) { }

  ngOnInit(): void {
    this.muralService.getMural()
      .subscribe((data: Mural[]) => {
          this.murals = data;
        },
        err => console.log(err));
  }
}
