import {Component, OnInit} from '@angular/core';

import { AsyncLocalStorage } from 'angular-async-local-storage';

import {MuralService} from './mural.service';
import {RoutesService} from './routes.service';
import {TokenService} from './token.service';

import {Mural} from './mural';
import {Route} from './route';
import {Token} from './token';


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
          console.log(tokenData.token);

          this.storage.setItem('myTokens', tokenData).subscribe(() => {
            console.log('LOCAL-STORAGE: FINISHED SAVING TOKEN DATA');

          this.muralService.getMurals()
            .subscribe((muralData: Mural[]) => {
                this.storage.setItem('myMurals', muralData).subscribe(() => {
                  console.log('LOCAL-STORAGE: FINISHED SAVING MURAL DATA');
                  console.log(muralData);
                });
              },
              err => console.log(err));
            this.routesService.getRoutes()
              .subscribe((routeData: Route[]) => {
                  this.storage.setItem('myRoutes', routeData).subscribe(() => {
                    console.log('LOCAL-STORAGE: FINISHED SAVING ROUTES DATA');
                    console.log(routeData);
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
