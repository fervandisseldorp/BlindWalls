import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import {MuralService} from './mural.service';
import {Mural} from './mural';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-mural-detail',
  templateUrl: './mural-detail.component.html',
  styleUrls: [ './mural-detail.component.css' ]
})

export class MuralDetailComponent implements OnInit {
  murals: Mural[];
  mural: Mural;

  constructor(private muralService: MuralService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.muralService.getMural(+params.get('id')))
      .subscribe((data: Mural) => {
        this.mural = data;
      });
  }
}
