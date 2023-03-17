import { createSlice } from '@reduxjs/toolkit'

export interface IAuthState {
  isLoggedIn: boolean
}

const initialState: IAuthState = {
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true
    },
    logOut: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer
