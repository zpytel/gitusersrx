import {Action,ActionReducer} from '@ngrx/store';
import * as undoaction from '../actions/undo';
import {createSelector} from 'reselect'
import * as fromCar from './car.reducer';


export interface UndoableState {
    past:ActionReducer<any>[];
    present:fromCar.State
    future:ActionReducer<any>[];


}
export function undoable(reducer : ActionReducer<any>) {
    // Call the reducer with empty action to populate the initial state
    const initialState : UndoableState = {
        past: [],
        present: reducer(fromCar.reducer, {type: '__INIT__'}),
        future: []
    };

    // Return a reducer that handles undo and redo
    return function (state = initialState, action : undoaction.Actions):any{
        const { past, present, future } = state;
        switch (action.type) {

            case undoaction.ActionType.UNDO:
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [ present, ...future ]
                };
            case undoaction.ActionType.REDO:
                const next = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [ ...past, present ],
                    present: next,
                    future: newFuture
                };
            default:
                // Delegate handling the action to the passed reducer
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state
                }
                return {
                    past: [ ...past, present ],
                    present: newPresent,
                    future: []
                }
        }
    }
}

export const getPresent=(state:UndoableState)=>state.present;
export const getIds=(state:UndoableState)=>state.present.ids;


