import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { CarEffects } from './effects/car.effect';
import {SearchEffect} from './effects/search.effect';
import { AppComponent } from './containers/app/app.component';
import {FindUserPageComponent } from './containers/find-user-page/find-user-page.component';
import {ViewUserPageComponent} from './containers/view-user-page/view-user-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import {SelectUserPageComponent} from './containers/select-user-page/select-user-page.component';
import { TestControlsComponent } from './containers/test-controls-page/test-controls.component';
import { FormPageComponent } from './containers/form-page/form-page.component';
import {routes} from './routes'
import {reducer} from './reducers'
import {UserExistsGuard} from './guards/user-exist.guard';
import {CarService} from './services/car.service'
import {Auth} from './services/auth.service'

import { ComponentsModule } from './components';








@NgModule({
  declarations: [
    AppComponent,
    FindUserPageComponent,
    ViewUserPageComponent,
    CollectionPageComponent,
    NotFoundPageComponent,
    SelectUserPageComponent,
    TestControlsComponent,
    FormPageComponent
    
   
    
   
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CarEffects),
    EffectsModule.run(SearchEffect)

  ],
  providers:[
   UserExistsGuard
  ,CarService
  ,AUTH_PROVIDERS
  ,Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
