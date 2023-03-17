import { createAsyncThunk } from '@reduxjs/toolkit'

import { notification } from '@/common/utils/notification'

import { configuredAxios } from '@/api'
import { auth } from '@/modules/Auth/constants'

export const fetchUser = createAsyncThunk(
  'user/login',
  async (values: object, { rejectWithValue }) => {
    try {
      const { data } = await configuredAxios.post(auth.LOGIN_URL, values)
      notification(`${data.message}`, 'success')
      return data
    } catch (error: any) {
      return rejectWithValue(error.response.data.message)
    }
  },
)

export const fetchUserRegister = createAsyncThunk(
  'user/registration',
  async (values: object, { rejectWithValue }) => {
    try {
      const { data } = await configuredAxios.post(auth.REGISTRATION_URL, values)
      notification(`${data.message}`, 'success')
      return data
    } catch (error: any) {
      return rejectWithValue(error.response.data.message)
    }
  },
)

export const fetchUserConfirm = createAsyncThunk<
  { email: string },
  {
    email: string
    code: string
  },
  { rejectValue: string }
>('user/confirm', async (form, { rejectWithValue }) => {
  try {
    await configuredAxios.post(auth.CONFIRM_URL, form)
    return { email: form.email }
  } catch (error: any) {
    return rejectWithValue('Ошибка при подтверждении аккаунта')
  }
})
