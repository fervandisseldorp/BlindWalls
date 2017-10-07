import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Token } from './token';


@Injectable()
export class TokenService {

  private token_url = 'https://api.blindwalls.gallery/apiv2/login';

  constructor(private http: HttpClient) { }

  getToken(): Observable<Token[]> {

    const body = {
      'username': 'blindwall',
      'password': 'blindwall'
    };

    return this.http.post(this.token_url, body);
  }

}

