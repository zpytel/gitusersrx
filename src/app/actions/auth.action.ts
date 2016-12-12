import {Action} from '@ngrx/store';
import {type} from '../utils/util';


export const ActionTypes={
    LOGIN: type('[LOGIN] Login user'),
    LOGOUT: type('[LOGOUT] Logout user')
}

export class LoginUser implements Action{
    type=ActionTypes.LOGIN;
    constructor(){}
    
}

    

export class LogoutUser implements Action{
    type=ActionTypes.LOGOUT;
    constructor(){}
    
}


export type Actions
=LoginUser
|LogoutUser
