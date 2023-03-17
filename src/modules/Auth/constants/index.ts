import * as yup from 'yup'

import { PWD_REGEX } from '@/constants'

export const auth = {
  REGISTRATION_URL: '/user/signup',
  LOGIN_URL: '/user/login',
  CONFIRM_URL: '/user/confirmation',
}

export const validationSchemaLogin = {
  email: yup
    .string()
    .email(`Введен некорректный email`)
    .required('Обязательно'),

  password: yup
    .string()
    .matches(
      PWD_REGEX,
      'Требуется минимум 6 символов. Пароль должен содержать английские заглавные и строчные буквы, цифры, спец символ.',
    )
    .required('Обязательно'),
}

export const validationSchemaRegistration = {
  email: yup
    .string()
    .email(`Введен некорректный email`)
    .required('Обязательно'),

  password: yup
    .string()
    .matches(
      PWD_REGEX,
      'Требуется минимум 6 символов. Пароль должен содержать английские заглавные и строчные буквы, цифры, спец символ.',
    )
    .required('Обязательно'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref(`password`)], 'Пароли должны совпадать')
    .required('Обязательно'),
}
