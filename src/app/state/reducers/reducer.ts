import { ActionReducerMap } from '@ngrx/store';
import * as fromActions from '../actions/actions';
// import { coinItem } from '../model';
// import { CoinComponent } from '../../coin/coin.component'

// coin model
export interface CoinItem {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  price_usd: string;
  price_btc: string;
  volume_24hr_usd: string;
  market_cap_usd: string;
  available_supply: string;
  total_supply: string;
  max_supply: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  last_updated: string;
};

// State model
export interface CoinState {
  data: CoinItem[];
  loaded: boolean;
  loading: boolean;
}

// initial state
export const initialState: CoinState = {
  data: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: '1',
      price_usd: '13801.0',
      price_btc: '1.0',
      volume_24hr_usd: '16292500000.0',
      market_cap_usd: '231545063012',
      available_supply: '16777412.0',
      total_supply: '16777412.0',
      max_supply: '21000000.0',
      percent_change_1h: '-0.19',
      percent_change_24h: '0.81',
      percent_change_7d: '-11.66',
      last_updated: '1514891663'
      }
  ],
  loaded: false,
  loading: false
};

// reducer
export function reducer(
  state = initialState,
  action: fromActions.CoinActions
)
:CoinState {
  switch (action.type) {

    case fromActions.LOAD_COINS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromActions.LOAD_COINS_SUCCESS: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromActions.LOAD_COINS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }
  return state;
}

// uniform state
export interface AppState {
  coins: CoinState;
}
export const reducers: ActionReducerMap<AppState> = {
  coins: reducer,
};
