import {createSelector} from 'reselect'
import * as tablayout from '../actions/tablayout'

export interface State{
    tabIndex:number;
    
}

const initialState:State={
   tabIndex:0
}

export function reducer(state=initialState,action:tablayout.Actions):State{
    switch(action.type){
        case tablayout.ActionTypes.TAB_INDEX:{
            return {
                 tabIndex:action.payload
            };
        }
        
        default:{
            return state;
        }

    }
}

export const getTabIndex=(state:State)=>state.tabIndex;