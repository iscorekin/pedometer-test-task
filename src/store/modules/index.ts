import { combineReducers } from "@reduxjs/toolkit";
import meter from './meter';

const reducers = combineReducers({
  meter
});

export type IReduxState = ReturnType<typeof reducers>;

export default reducers;