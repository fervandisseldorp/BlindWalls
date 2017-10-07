import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Mural} from './mural';
import {Token} from './token';
import {AsyncLocalStorage} from 'angular-async-local-storage';


@Injectable()
export class MuralService {

  private mural_url = 'https://api.blindwalls.gallery/apiv2/murals';

  constructor(private http: HttpClient, private storage: AsyncLocalStorage) {

  }

  getMurals(): Observable<Mural[]> {
    const token = this.storage.getItem('myTokens');

    console.log('LOCAL-STORAGE: FOUND TOKEN AT MURAL-SERVICE ' + token);

    const headerObject = new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token': token
    });

    return this.http.get(this.mural_url, headerObject);
  }

  getMural(): Observable<Mural[]> {
    return this.http.get('/assets/mural.json');
  }
}

