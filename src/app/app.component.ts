import { Component, OnInit } from '@angular/core';
import { coinItem } from './state/model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CoinStore from './state/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  coins: coinItem[];

  constructor(
    // private baseService: BaseService,
    private store: Store<CoinStore.AppState>
  ) {
  }
  
  ngOnInit() {
    this.store
    .select<any>('coinstate')
    .subscribe(state => {
      console.log(state);
    });
    //// simple call
    // this.baseService.getCoins()
    //   .subscribe(data => {
    //   this.coins = data;
    //   console.log(this.coins);
    // });

    // observable call

  }
}
