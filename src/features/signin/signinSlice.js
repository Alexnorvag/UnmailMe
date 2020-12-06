import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import auth from '../../utils/auth';
import {getValue} from '../../utils/storageUtil';
import {JWT_TOKEN} from '../../config';

export const checkAuth = createAsyncThunk('signin/checkAuth', async () => {
  const token = await getValue(JWT_TOKEN);
  console.log('[AUTH SLICE]: ', token);
  const isAuthed = !!token;
  return isAuthed;
});

export const login = createAsyncThunk('signin/login', async (params) => {
  console.log('login to app: ', params);
  const {token, email} = await auth.login(params);
  return {token, email};
});

export const logout = createAsyncThunk('signin/logout', async () => {
  await auth.logout();
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
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthed = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthed = false;
    });
  },
});

export default reducer = slice.reducer;

export const {} = signinAdapter.getSelectors((state) => state.signin);
