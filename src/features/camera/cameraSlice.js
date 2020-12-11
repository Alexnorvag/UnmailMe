import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const cameraAdapter = createEntityAdapter();

const initialState = cameraAdapter.getInitialState({
  src: '',
  previewSrc: '',
});

export const slice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    createPhoto: (state, action) => {
      state.src = action.payload;
    },
    deletePhoto: (state) => {
      state.src = '';
    },
  },
});

export default reducer = slice.reducer;

export const {createPhoto, deletePhoto} = slice.actions;

export const {} = cameraAdapter.getSelectors((state) => state.camera);
