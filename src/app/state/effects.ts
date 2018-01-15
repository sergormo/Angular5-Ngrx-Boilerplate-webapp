import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import {Actions, Effect} from '@ngrx/effects';
import {Params, ActivatedRouteSnapshot} from "@angular/router";
import {Store, combineReducers} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import { Observable } from "rxjs/Rx";
import { filter, map, switchMap } from 'rxjs/operators';

import { BaseService } from '../services/base.service';
import { State } from './model';

//function firstSegment(route: RouterNavigationAction) {
//  return route.payload.routerState.root.firstChild;
//}

//@Injectable()
//export class CoinEffects {
//
//  constructor(
//    private actions: Actions,
//    private store: Store<State>,
//    private BaseService: BaseService,
//    ) {
//    console.log(this.goHome);
//  }
//
//  @Effect()
//  goHome = this.actions.ofType(ROUTER_NAVIGATION)
//    .map(firstSegment)
//    .filter(s => s.routeConfig.path === "talks")
//    .switchMap((r: ActivatedRouteSnapshot) => {
//      
////      const filters = createFilters(r.params);
////      return this.backend.findTalks(filters).map(resp => ({type: 'TALKS_UPDATED', payload: {...resp, filters}}));
//    })
//    .catch(e => {
//      console.log('Network error', e);
//      return of();
//    });
//
//
//  private handleNavigation(
//    segment: string,
//    callback: (route: ActivatedRouteSnapshot, state: State) => Observable<any>
//  ) {
//
//    const nav = this.actions.ofType(ROUTER_NAVIGATION)
//      .map(firstSegment)
//      .filter(s => s.routeConfig.path === segment);
//
//    return nav.withLatestFrom(this.store)
//      .switchMap(route => callback(route[0], route[1]))
//      .catch(err => {
//        console.log('Network error', err);
//        return of();
//      });
//  }
//
//  @Effect()
//  goCoins = this.handleNavigation('home', (r: ActivatedRouteSnapshot) => {
//    return this.BaseService
//      .pickCoins()
//      .map(resp => ({
//        type: 'COINS_UPDATED',
//        payload: {...resp}
//    }));
//  });
//}


