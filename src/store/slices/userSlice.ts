import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { Character } from '@/types'
import { HYDRATE } from 'next-redux-wrapper'

export interface UserState {
  data: Character | null
}

const initialState: UserState = {
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Character>) => {
      state.data = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      }
    },
  },
})

export const { setUserData } = userSlice.actions

export const selectUserData = (state) => state.user.data
export const UserReducer = userSlice.reducer
