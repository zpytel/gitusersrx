import {Action} from '@ngrx/store';
import {type} from '../utils/util';
import {Car} from '../models/cars'


export const ActionTypes={
    SEARCH: type("[Search] cars search"),
    SEARCH_COMPLETE: type("[Search] search complete")
}


export class SearchAction implements Action{
    type=ActionTypes.SEARCH;
    constructor(public payload:string){

    }
}
export class SearchCompleteAction implements Action{
    type=ActionTypes.SEARCH_COMPLETE;
    constructor(public payload:any[]){

    }
}

export type Actions
=SearchAction
| SearchCompleteAction