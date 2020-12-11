import {combineReducers} from '@reduxjs/toolkit';

import signinreducer from '../features/signin/signinSlice';
import cameraReducer from '../features/camera/cameraSlice';

export const rootReducer = combineReducers({
  signin: signinreducer,
  camera: cameraReducer,
});
