import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {coinItem} from "../state/model";

@Injectable()
export class BaseService {
  private url = 'https://api.coinmarketcap.com/v1';

  constructor(private http: Http) {
    console.log('hola');
  }

  pickCoins(): Observable<any> {
    return this.http.get(`${this.url}/ticker/`, {})
      .map(r => r.json());
  }

}
