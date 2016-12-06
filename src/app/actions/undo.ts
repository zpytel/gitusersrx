import {Action,ActionReducer} from '@ngrx/store';

import {type} from '../utils/util';

export const ActionType={
 UNDO:type('[UNDO] undo action'),
 REDO:type('[UNDO] redo action')
}

export class UndoAction implements Action{
    type=ActionType.UNDO;
    constructor(public payload:ActionReducer<any>){}
}

export class RedoAction implements Action{
    type=ActionType.REDO;
    constructor(public payload:ActionReducer<any>){}
}



export type Actions=
UndoAction|
RedoAction;