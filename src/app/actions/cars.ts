import {Action} from '@ngrx/store';

import {type} from '../utils/util';
import {Car} from '../models/cars'



export const ActionTypes={
    CAR_LOAD:type("[cars] Car Load"),
    CAR_SELECTED:type("[cars] Car Selected"),
    CAR_LOAD_SUCCESS:type("[cars] Car Load Success"),
    CAR_LOAD_FAIL:type("[cars] Car load Failed "),
    CAR_ADD:type("[Car] Car add"),
    CAR_ADD_SUCCESS:type("[Car] Car added successfull")
}

export class CarSelected implements Action{
    type=ActionTypes.CAR_SELECTED;
    constructor(public payload:Car){

    }
}
export class CarLoad implements Action{
    type=ActionTypes.CAR_LOAD;
    constructor(){

    }

}

export class CarLoadSuccess implements Action{
    type=ActionTypes.CAR_LOAD_SUCCESS;
    constructor(public payload:Car[]){
     
    }
}
export class CarLoadFailed implements Action{
    type=ActionTypes.CAR_LOAD_FAIL;

    constructor(public payload:any){

    }
}
export class CarAdd implements Action{
    type=ActionTypes.CAR_ADD;

    constructor(public payload:Car){

    }
}
export class CarAddSuccess implements Action{
    type=ActionTypes.CAR_ADD_SUCCESS;

    constructor(public payload:Car){
        
    }
}

export type Actions=
CarSelected
|CarLoad
|CarLoadFailed
|CarLoadSuccess
|CarAdd
|CarAddSuccess