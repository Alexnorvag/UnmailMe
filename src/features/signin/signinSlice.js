import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthed: false,
  error: undefined,
  loading: false,
  loggedIn: false,
  loggedInUser: undefined,
  token: undefined,
};

export const slice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
});

export default reducer = slice.reducer;
