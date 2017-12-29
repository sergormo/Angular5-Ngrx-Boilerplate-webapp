import {RouterAction, ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {Actions, Effect} from '@ngrx/effects';
import {Params, ActivatedRouteSnapshot} from "@angular/router";
import {Store, combineReducers} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/withLatestFrom';


// ******************
// state

export type coinItem = {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  price_usd: number,
  price_btc: number,
  volume_24hr_usd: number,
  market_cap_usd: number,
  available_supply: number,
  total_supply: number,
  max_supply: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  last_updated: number,
  favorite: boolean
};

export type AppState = {
  coins: { [id: string]: coinItem },
  favorites: { [id: string]: coinItem.id }
};

export type State = { app: AppState };

// init state

export const initialState: State = {
  app: {
    coins: {},
    favorites: {}
  }
};

// ******************
// actions

export type UpdateCoins = {
  type: 'UPDATE_COINS',
  payload: { coins: { [id: number]: coinItem } }
};

//export type FavCoin = {
//  type: 'FAV_COIN',
//  payload: { coinId: number, error: any }
//};
//
//export type UnfavCoin = {
//  type: 'UNFAV_COIN',
//  payload: { coinId: number, error: any }
//};

type Action = RouterAction<State> | UpdateCoins;

// ******************
// reducer

export function appReducer(
  state: AppState,
  action: Action): AppState {

  switch (action.type) {
    case 'UPDATE_COINS': {
      return {...state, ...action.payload};
    }
//    case 'FAV_COIN': {
//      const coins = {...state.coins};
//      coins[action.payload.coinId] = action.payload;
//      return {...state, coins};
//    }
//    case 'UNFAV_COIN': {
//      const Coins = {...state.coins};
//      coins[action.payload.coinId] = null;
//      return {...state, coins};
//    }
    default: {
      return state;
    }
  }
}

