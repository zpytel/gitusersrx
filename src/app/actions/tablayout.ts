import {Action} from '@ngrx/store';
import {type} from '../utils/util';

export const ActionTypes={
    TAB_INDEX: type('[tab] Tab Index Changed')
}

export class SelectIndexTabAction implements Action{
    type=ActionTypes.TAB_INDEX;
    constructor(public payload:number){
    }
}



export type Actions
=SelectIndexTabAction;
