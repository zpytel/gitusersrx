import { createSelector } from 'reselect';
import * as search from '../actions/search';

export interface State{
    ids:number[],
    loading:boolean,
    query:string
}


const initialstate:State={
ids:[],
loading:false,
query:''
}

export function reducer(state=initialstate,action:search.Actions):State{

switch(action.type){
    case(search.ActionTypes.SEARCH):{
       const squery=action.payload;
       if(squery===''){
           return{
               ids:[],
               loading:false,
               query:squery
           }
       }
       return Object.assign({},state,{query:squery,loading:true})
    }
    case(search.ActionTypes.SEARCH_COMPLETE):{
     const cars=action.payload;

        return {
            ids:cars.map(car=>car.id),
            loading:false,
            query:state.query
        }
    }
    default:
     return state;
}
}

export const getIds=(state:State)=>state.ids;
export const getQuery=(state:State)=>state.query;
export const getLoading=(state:State)=>state.loading;