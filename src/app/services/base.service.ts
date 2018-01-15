import {Http, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {catchError} from 'rxjs/operators';
import {coinItem} from "../state/model";

@Injectable()
export class BaseService {
  private url = 'https://api.coinmarketcap.com/v1';

  constructor(private http: Http) {
    console.log('hola');
  }
  // getCoins(): Observable<coinItem[]> {
  // return this.http
  //   .get(`${this.url}/ticker/`)
  //   .map((res: Response) => res.json())
  //   .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
}
