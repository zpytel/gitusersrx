import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';


import * as fromLayout from './layout.reducer';
import * as fromTabLayout from './tablayout.reducer';
import * as fromCar from './car.reducer';
import * as fromSearch from './search.reducer';
import * as fromLogon from './logon.reducer';

export interface State{
    layout:fromLayout.State,
    tablayout:fromTabLayout.State,
    router:fromRouter.RouterState,
    car:fromCar.State,
    search:fromSearch.State,
    logon:fromLogon.State
}

const reducers={
 layout:fromLayout.reducer,
 tablayout:fromTabLayout.reducer,
 router:fromRouter.routerReducer,
 car:fromCar.reducer,
 search:fromSearch.reducer,
 logon:fromLogon.reducer
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

export const getTabLayoutState=(state:State)=>state.tablayout;
export const getTabLayoutIndex=createSelector(getTabLayoutState,fromTabLayout.getTabIndex);

export const getLogonState=(state:State)=>state.logon;
export const getAuthenticated=createSelector(getLogonState,fromLogon.getAuthenticated);
export const getProfile=createSelector(getLogonState,fromLogon.getProfile);


export const getCarState=(state:State)=>state.car;
export const getSearchState=(state:State)=>state.search

export const getCarEntities=createSelector(getCarState,fromCar.getCarsEntities)
export const getCarIds=createSelector(getCarState,fromCar.getCarsIds)
export const getCarCollection=createSelector(getCarEntities,getCarIds,(entities,ids)=>{
  return ids.map(id=>entities[id]);
})
export const getSearchCarIds=createSelector(getSearchState,fromSearch.getIds)
export const getSearchLoaded=createSelector(getSearchState,fromSearch.getLoading);
export const getSearchQuery=createSelector(getSearchState,fromSearch.getQuery)



export const getSearchCarsResult=createSelector(getCarEntities,getSearchCarIds,(entities,ids)=>{
 return ids.map(id=>entities[id])
})
export const getSelectedCar=createSelector(getCarState,fromCar.getSelected)
export const getSelecteCarId=createSelector(getCarState,fromCar.getSelectedId)