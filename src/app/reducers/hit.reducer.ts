import {createSelector} from 'reselect'
import * as hitaction from '../actions/hits.action'
import {Hits,Hit} from '../models/hits'

export interface State{
   
    loading:boolean,
    query:string,
    hits:Hit[];
    selectedHit:string;
}

const initState={
    loading:false,
    query:"",
    hits:[],
    selectedHit:""
}

export function reducer(state=initState,action:hitaction.Actions):State{
switch(action.type){
        case hitaction.ActionTypes.HIT_LOAD:{
            const query:string=action.payload;
            if(query===''){
                return{
             
              loading:false,
              query:state.query,
              hits:[],
              selectedHit:state.selectedHit
            }
            
            }
            
            return Object.assign({},state,{query:query,loading:true})
        }
        case hitaction.ActionTypes.HIT_SELECTED:{
          const hitselcted:Hit=action.payload;
          return {
            
              loading:state.loading,
              query:state.query,
              hits:[...state.hits],
              selectedHit:hitselcted.id
          }
        }
        case hitaction.ActionTypes.HIT_LOAD_SUCCESS:{
            const hits:any=action.payload.map(item=>{return {id:item._id,score:item._score,source:item._source}});
            const newhits=action.payload;
            return {
              loading:false,
              query:state.query,
              hits:[...newhits],
              selectedHit:state.selectedHit
          }
        }
        case hitaction.ActionTypes.HIT_LOAD_FAIL:{
            const t=action.payload;
            return t;
        }
        default:{
            return state;
        }
}


}

export const getHits=(state:State)=>state.hits;
export const getHitQuery=(state:State)=>state.query;
export const getHitLoading=(state:State)=>state.loading;