import {combineReducers} from '@reduxjs/toolkit';

import signinreducer from '../features/signin/signinSlice';

export const rootReducer = combineReducers({
  signin: signinreducer,
});
