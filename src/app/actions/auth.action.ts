import {Action} from '@ngrx/store';
import {type} from '../utils/util';
import {User,Profile} from '../models/auth.model'


export const ActionTypes={
    LOGIN: type('[LOGIN] Login user'),
    LOGOUT: type('[LOGOUT] Logout user')
}

export class LoginUser implements Action{
    type=ActionTypes.LOGIN;
    constructor(public payload:User){}
    
}

    

export class LogoutUser implements Action{
    type=ActionTypes.LOGOUT;
    constructor(public payload:User){}
    
}


export type Actions
=LoginUser
|LogoutUser
