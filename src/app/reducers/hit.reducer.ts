import {createSelector} from 'reselect'
import * as hitaction from '../actions/hits.action'
import {Hits,Hit,Load} from '../models/hits'

export interface State{
    pagenumber:number,
    loading:boolean,
    query:string,
    hits:Hit[];
    selectedHit:string;
}

const initState={
    pagenumber:10,
    loading:false,
    query:"",
    hits:[],
    selectedHit:""
}

export function reducer(state=initState,action:hitaction.Actions):State{
switch(action.type){
        case hitaction.ActionTypes.HIT_LOAD:{
            const val:Load=action.payload;
            console.log("HIT_LOAD " + val.records)
            if(val.search===''){
                return{
              pagenumber:val.records,
              loading:false,
              query:state.query,
              hits:[],
              selectedHit:state.selectedHit
            }
            
            }
            
            return Object.assign({},state,{query:val.search,loading:true,pagenumber:val.records})
        }
        case hitaction.ActionTypes.HIT_SELECTED:{
          const hitselcted:Hit=action.payload;
          
          return {
              pagenumber:state.pagenumber,
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
              pagenumber:state.pagenumber,
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
export const getRecordsPerPage=(state:State)=>state.pagenumber;