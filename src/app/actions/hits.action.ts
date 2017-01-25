import {Action} from '@ngrx/store';
import {type} from '../utils/util';
import {Hits,Hit} from '../models/hits'


export const ActionTypes={
    HIT_LOAD:type("[hits] Hit Load"),
    HIT_SELECTED:type("[hits] Hit Selected"),
    HIT_LOAD_SUCCESS:type("[hits] Hit Load Success"),
    HIT_LOAD_FAIL:type("[hits] Hit load Failed ")
    
}

export class HitSelected implements Action{
    type=ActionTypes.HIT_SELECTED;
    constructor(public payload:Hit){

    }
}

export class HitLoad implements Action{
    type=ActionTypes.HIT_LOAD;
    constructor(public payload:string){

    }
}
export class HitLoadSuccess implements Action{
    type=ActionTypes.HIT_LOAD_SUCCESS;
    constructor(public payload:any){
     
    }
}
export class HitLoadFailed implements Action{
    type=ActionTypes.HIT_LOAD_FAIL;

    constructor(public payload:any){

    }
}
export type Actions
=HitSelected
| HitLoad
| HitLoadSuccess
| HitLoadFailed