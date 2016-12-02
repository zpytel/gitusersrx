import {createSelector} from 'reselect'
import * as caraction from '../actions/cars'
import {Car} from '../models/cars'

export interface State{
    ids:number[];
    entities:{[id:number]:Car};
    selectedCarId:number|null ;
}

const initState={
    ids:[],
    entities:{},
    selectedCarId:null
}

export function reducer(state=initState,action:caraction.Actions):State{
    switch(action.type){
        case caraction.ActionTypes.CAR_SELECTED:{
          const carselcted:Car=action.payload;
          return {
              ids:[...state.ids],
              entities:Object.assign({},state.entities),
              selectedCarId:carselcted.id
          }
        }
        case caraction.ActionTypes.CAR_LOAD_SUCCESS:{
            const cars=action.payload;
            const carsids=cars.map(car=>car.id);
            const newcars = cars.filter(car => !state.entities[car.id]);
            const carsEntities=cars.reduce((entities:{[id:number]:Car},car:Car)=>{
                return Object.assign(entities,{[car.id]:car})
            },{})
            return {
                ids:[...state.ids,...newcars],
                entities:Object.assign({},state.entities,carsEntities),
                selectedCarId:state.selectedCarId
            }
        }
        default:{
            return state;
        }
    }
}

export const getCarsEntities = (state:State)=>state.entities;
export const getCarsIds=(state:State)=>state.ids;
export const getSelectedId=(state:State)=>state.selectedCarId;

export const getSelected=createSelector(getSelectedId,getCarsEntities,(selectedid,entities)=>{
    return entities[selectedid];
})

export const getAll=createSelector(getCarsEntities,getCarsIds,(entities,ids)=>{
    return ids.map(id=>entities[id]);
})