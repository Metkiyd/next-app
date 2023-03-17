import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { configuredAxios } from '@/api'
import { Routes } from '@/enums'
import { logOut } from '@/store/authSlice'
import { useError } from '@/hooks/useError'

export const disconnectUser = createAsyncThunk(
  'auth/disconnectUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await configuredAxios<
        string,
        { data: { message: string } }
      >(Routes.LOG_OUT)
      dispatch(logOut())

      return data.message || 'success'
    } catch (error) {
      const { status, message } = useError(
        error as AxiosError<{ message: string }>,
      )

      toast.error(message)

      return rejectWithValue({
        status,
        message,
      })
    }
  },
)
