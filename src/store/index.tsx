import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import { UserReducer } from '@/store/slices/userSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      user: UserReducer,
    },
    devTools: true,
  })
export const wrapper = createWrapper(makeStore)
// export const store = makeStore()

// export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
//
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
//
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
