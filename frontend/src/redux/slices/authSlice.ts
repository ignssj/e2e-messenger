import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAuth {
  userId: string;
  username: string;
  password: string;
  token: string;
}

const initialState: IAuth = {
  userId: '',
  username: '',
  password: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IAuth>) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    logout: () => initialState,
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer