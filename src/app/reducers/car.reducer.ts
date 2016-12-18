import {createSelector} from 'reselect'
import * as caraction from '../actions/cars'
import {Car} from '../models/cars'

export interface State{
    ids:number[];
    entities:{[id:number]:Car};
    selectedCarId:number|-1 ;
}

const initState={
    ids:[],
    entities:{},
    selectedCarId:-1
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
            const newcars = cars.filter(car => !state.entities[car.id]);
            const newcarsids=newcars.map(car=>car.id)
            const carsEntities=newcars.reduce((entities:{[id:number]:Car},car:Car)=>{
                return Object.assign(entities,{[car.id]:car})
            },{})
           
            return {
                ids:[...state.ids,...newcarsids],
                entities:Object.assign({},state.entities,carsEntities),
                selectedCarId:state.selectedCarId
            }
        }
        case caraction.ActionTypes.CAR_LOAD_FAIL:{
            const t=action.payload;
            
            return state;
        }
        default:{
            return state;
        }
    }
}

export const getCarsEntities = (state:State)=>state.entities;
export const getCarsIds=(state:State)=>state.ids;
export const getSelectedId=(state:State)=>state.selectedCarId;

export const getSelected=createSelector(getCarsEntities,getSelectedId,(entities,selectedid)=>{
    return entities[selectedid];
})

export const getAll=createSelector(getCarsEntities,getCarsIds,(entities,ids)=>{
    return ids.map(id=>entities[id]);
})