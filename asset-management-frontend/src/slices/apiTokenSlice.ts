import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiTokenState {
  userInfo: any;
  accessToken: any;
  refreshToken: any;
}

const initialState: ApiTokenState = {
  userInfo: [],
  accessToken: '',
  refreshToken: '',
};

const apiTokenSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserInfo(state, action: PayloadAction<string>) {
      state.userInfo.push(action.payload);
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    updateRefreshToken(state, action: PayloadAction<string>) {
      state.refreshToken = action.payload;
    },
    logout(state) {
      state.userInfo = [];
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { updateUserInfo, updateAccessToken, updateRefreshToken, logout } =
  apiTokenSlice.actions;
export default apiTokenSlice.reducer;
