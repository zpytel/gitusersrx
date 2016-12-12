import {createSelector} from 'reselect'
import * as auth from '../actions/auth.action'

export interface State{
    logon:boolean;
}

const initialState:State={
    logon:false,
}

export function reducer(state=initialState,action:auth.Actions):State{
    switch(action.type){
       
        case auth.ActionTypes.LOGIN:{
            
            return {
                logon:true
            };
        }
        case auth.ActionTypes.LOGOUT:{
            
            return {
                logon:false
            };
        }
        default:{
            return state;
        }

    }
}

export const getLogon=(state:State)=>state.logon;