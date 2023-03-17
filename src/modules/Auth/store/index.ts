import { createSlice } from '@reduxjs/toolkit'

import type { AppState } from '@/store'

export interface IUserState {
  userInfo: {
    id: string
    email: string
    message?: string
  } | null
  error: any | null
}

const initialState: IUserState = {
  userInfo: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) =>
        action.type.startsWith('user') && action.type.endsWith('pending'),
      (state) => {
        state.error = null
      },
    )
    builder.addMatcher(
      (action) =>
        action.type.startsWith('user') && action.type.endsWith('fulfilled'),
      (state, { payload }) => {
        state.userInfo = payload
        state.error = null
      },
    )
    builder.addMatcher(
      (action) =>
        action.type.startsWith('user') && action.type.endsWith('rejected'),
      (state, { payload }) => {
        state.error = payload
      },
    )
  },
})

export const selectAuthUser = (state: AppState) => state.user.userInfo

export default userSlice.reducer
