import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';


import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';


import * as fromLayout from './layout.reducer';
import * as fromCar from './car.reducer';

export interface State{
    layout:fromLayout.State,
    router:fromRouter.RouterState,
    car:fromCar.State
}

const reducers={
 layout:fromLayout.reducer,
 router:fromRouter.routerReducer,
 car:fromCar.reducer

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

export const getCarState=(state:State)=>state.car;
export const getCarEntities=createSelector(getCarState,fromCar.getCarsEntities)
export const getCarIds=createSelector(getCarState,fromCar.getCarsIds)
export const getCarCollection=createSelector(getCarEntities,getCarIds,(entities,ids)=>{
  return ids.map(id=>entities[id]);
})

export const getSelectedCar=createSelector(getCarState,fromCar.getSelected)
export const getSelecteCarId=createSelector(getCarState,fromCar.getSelectedId)