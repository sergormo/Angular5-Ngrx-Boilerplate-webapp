import { Action } from '@ngrx/store';

import { coinItem } from '../model';

//load Coins
export const LOAD_COINS = '[Coins] Load Coins';
export const LOAD_COINS_FAIL = '[Coins] Load Coins Fail';
export const LOAD_COINS_SUCCESS = '[Coins] Load Coins Success';

export class LoadCoins implements Action {
  readonly type = LOAD_COINS;
}

export class LoadCoinsFail implements Action {
  readonly type = LOAD_COINS_FAIL;
  constructor(public payload: any) {
  }
}

export class LoadCoinsSuccess implements Action {
  readonly type = LOAD_COINS_SUCCESS;
  constructor(public payload: any) {
  }
}

export type CoinActions = LoadCoins | LoadCoinsFail | LoadCoinsSuccess;
