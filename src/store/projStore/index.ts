import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import userReducer from '@/modules/Auth/store'
import authReducer from './authSlice'
import companyInformationSlice from '@/modules/CreateCompany/store'

const makeStore = () =>
  configureStore({
    reducer: {
      authInfo: authReducer,
      user: userReducer,
      companyInformation: companyInformationSlice,
    },
    devTools: process.env.NODE_ENV === 'development',
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
