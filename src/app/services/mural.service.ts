import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Mural} from '../models/mural';
import {AsyncLocalStorage} from 'angular-async-local-storage';


@Injectable()
export class MuralService {

  private mural_url = 'https://api.blindwalls.gallery/apiv2/murals';

  constructor(private http: HttpClient, private storage: AsyncLocalStorage) { }

  getMurals(token: string): Observable<Mural[]> {

    const headerObject = new Headers({
      'Content-Type': 'application/json',
      'X-Access-Token': token
    });

    return this.http.get(this.mural_url, headerObject);
  }

  getMural(id: number) {
    return this.storage.getItem('myMurals')
      .map(murals => {
        return murals.find(m => m.id === id);
      });
  }
}

