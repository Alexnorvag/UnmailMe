import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

export const checkAuth = createAsyncThunk('signin/checkAuth', async () => {
  return true;
});

export const logout = createAsyncThunk('signin/logout', async () => {
  return false;
});

export const signinAdapter = createEntityAdapter();

const initialState = signinAdapter.getInitialState({
  isAuthed: false,
  error: undefined,
  loading: false,
  loggedIn: false,
  loggedInUser: undefined,
  token: undefined,
});

export const slice = createSlice({
  name: 'signin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.isAuthed = action.payload;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuthed = action.payload;
    });
  },
});

export default reducer = slice.reducer;

export const {} = signinAdapter.getSelectors((state) => state.signin);
