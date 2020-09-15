import { createReducer, on, Action } from '@ngrx/store';
import { toggle } from './theme.actions';

export const initialState = "dark";

const reducer = createReducer(
    initialState,
    on(toggle, (state) => state === 'dark' ? 'light' : 'dark'),
);

export function themeReducer(state: any, action: Action) {
    return reducer(state, action);
}

