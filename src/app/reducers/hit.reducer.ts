import {createSelector} from 'reselect'
import * as hitaction from '../actions/hits.action'
import {Hits,Hit} from '../models/hits'

export interface State{
    total:number;
    max_score:number;
    loading:boolean,
    query:string,
    hits:Hit[];
    selectedHit:string;
}

const initState={
    total:0,
    max_score:0,
    loading:false,
    query:"",
    hits:[{id:"",score:0,source:{text:""}}],
    selectedHit:""
}

export function reducer(state=initState,action:hitaction.Actions):State{
switch(action.type){
        case hitaction.ActionTypes.HIT_LOAD:{
            const query:string=action.payload;
            if(query===''){
                return{
             total:state.total,
              max_score:state.max_score,
              loading:false,
              query:state.query,
              hits:[...state.hits],
              selectedHit:state.selectedHit
            }
            
            }
            return Object.assign({},state,{query:query,loading:true})
        }
        case hitaction.ActionTypes.HIT_SELECTED:{
          const hitselcted:Hit=action.payload;
          return {
              total:state.total,
              max_score:state.max_score,
              loading:state.loading,
              query:state.query,
              hits:[...state.hits],
              selectedHit:hitselcted.id
          }
        }
        case hitaction.ActionTypes.HIT_LOAD_SUCCESS:{
            const hits:Hits=action.payload;
            return {
              total:state.total,
              max_score:state.max_score,
              loading:true,
              query:state.query,
              hits:[...state.hits],
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