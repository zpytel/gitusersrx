import {createSelector} from 'reselect'
import * as auth from '../actions/auth.action'
import {User,Profile} from '../models/auth.model'

export interface State{
    authenticated:boolean,
    profile:Profile;
}

const initialState:State={
    authenticated:false,
    profile:{name:'',email:'',image:'',nick:''}
}

export function reducer(state=initialState,action:auth.Actions):State{
    switch(action.type){
       
        case auth.ActionTypes.LOGIN:{
            const user=action.payload;
            
            return {
               authenticated:user.authenticated,
               profile:Object.assign({},user.profile)
            };
        }
        case auth.ActionTypes.LOGOUT:{
            const user=action.payload;
            return {
              authenticated:user.authenticated,
               profile:Object.assign({},user.profile)
            };
        }
        default:{
            return state;
        }

    }
}

export const getAuthenticated=(state:State)=>state.authenticated;
export const getProfile=(state:State)=>state.profile;