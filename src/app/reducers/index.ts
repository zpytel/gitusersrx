import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';


import * as fromLayout from './layout.reducer'

export interface State{
    layout:fromLayout.State,
    router:fromRouter.RouterState
}

const reducers={
 layout:fromLayout.reducer,
 router:fromRouter.routerReducer

};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

export const getLayoutState=(state:State)=>state.layout;

export const getShowSidenav=createSelector(getLayoutState,fromLayout.getShowSidenav)
