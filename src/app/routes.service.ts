import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Route } from './route';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class RoutesService {

  private routes_url = 'https://api.blindwalls.gallery/apiv2/routes';

  constructor(private http: HttpClient, private storage: AsyncLocalStorage) { }

  getRoutes(token: string): Observable<Route[]> {
    console.log('LOCAL-STORAGE: FOUND TOKEN AT ROUTES-SERVICE ' + token);

    const headerObject = new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token': token
    });
    return this.http.get(this.routes_url, headerObject);
  }
}

