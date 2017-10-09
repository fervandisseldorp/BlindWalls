import {Component, OnInit} from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import {MuralService} from '../../services/mural.service';
import {RoutesService} from '../../services/routes.service';
import {TokenService} from '../../services/token.service';

import {Mural} from '../../models/mural';
import {Route} from '../../models/route';
import {Token} from '../../models/token';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Blind Walls Gallery';
  mDisplay = 'block';

  constructor(private muralService: MuralService, private routesService: RoutesService,
              private tokenService: TokenService, protected storage: AsyncLocalStorage) {

  }

  ngOnInit(): void {
    this.tokenService.getToken()
      .subscribe((tokenData: Token) => {

          this.storage.setItem('myTokens', tokenData).subscribe(() => {

          this.muralService.getMurals(tokenData.token)
            .subscribe((muralData: Mural[]) => {
                this.storage.setItem('myMurals', muralData).subscribe(() => {
                });
              },
              err => console.log(err));
            this.routesService.getRoutes(tokenData.token)
              .subscribe((routeData: Route[]) => {
                  this.storage.setItem('myRoutes', routeData).subscribe(() => {
                  });
                },
                err => console.log(err));

          });
      },
        err => console.log(err));

  }


  changeDisplay() {
    if (this.mDisplay === 'block') {
      this.mDisplay = 'none';
    } else {
      this.mDisplay = 'block';
    }
  }

  getVisibility(newValue: number) {
    if (newValue === 0 && this.mDisplay === 'block') {
      return 'none';
    } else if (newValue === 0 && this.mDisplay === 'none') {
      return 'block';
    } else {
      return this.mDisplay;
    }
  }
}
