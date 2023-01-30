import { createReducer, on } from "@ngrx/store";
import { setDarkMode } from "./toolbar.actions";

export const initialState = false

export const darkModeReducer = createReducer(
    initialState,
    on(setDarkMode, (state) => !state)
)