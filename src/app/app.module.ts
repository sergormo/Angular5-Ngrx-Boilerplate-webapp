import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';

//NGRX
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CoinComponent } from './coin/coin.component';

//services
import { BaseService } from './services/base.service';

//directives
import { MdlDirective } from './directives/mdl.directive';

import { coinItem, appReducer, initialState, State } from "./state/model";
import { CoinEffects } from "./state/effects";

//NEW

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    CoinComponent,
    MdlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({app: appReducer}, {initialState}),
    EffectsModule.forRoot([CoinEffects]),
    StoreRouterConnectingModule
  ],
  providers: [
    BaseService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
