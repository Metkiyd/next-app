import React from 'react'
import { useRouter } from 'next/router'
import { Formik, FormikValues } from 'formik'
import * as yup from 'yup'

import { Input } from '@/components/UI/Inputs/Input'
import { PasswordInput } from '@/components/UI/Inputs/PasswordInput'
import { Button, SIZE } from '@/components/UI/Button'

import { fetchUserRegister } from '@/modules/Auth/service'
import { generateError } from '@/common/utils/generateError'
import { notification } from '@/common/utils/notification'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { validationSchemaRegistration } from '@/modules/Auth/constants'

import styles from '@/pages/auth/styles.module.scss'

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const validationsSchema = yup
    .object()
    .shape({ ...validationSchemaRegistration })
  const router = useRouter()

  const handleSubmit = async (values: FormikValues) => {
    try {
      await dispatch(fetchUserRegister(values)).unwrap()
      router.push('/auth/confirm')
    } catch (error) {
      notification(`${error}`, 'error')
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        // confirmPassword: '',
      }}
      validationSchema={validationsSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <>
          <div className={styles.inputs}>
            <Input
              value={values.name}
              label='Введите имя'
              name='name'
              error={Boolean(errors.name && touched.name)}
              helperText={generateError(errors, touched, 'name')}
              onChange={handleChange}
              onBlur={handleBlur}
              success={!errors.name && dirty}
            />
            <Input
              value={values.email}
              label='Введите e-mail'
              name='email'
              error={Boolean(errors.email && touched.email)}
              helperText={generateError(errors, touched, 'email')}
              onChange={handleChange}
              onBlur={handleBlur}
              success={!errors.email && dirty}
            />
            <PasswordInput
              value={values.password}
              label='Введите пароль'
              name='password'
              error={Boolean(errors.password && touched.password)}
              helperText={generateError(errors, touched, 'password')}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <PasswordInput */}
            {/*  value={values.confirmPassword} */}
            {/*  label='Повторите пароль' */}
            {/*  name='confirmPassword' */}
            {/*  error={Boolean(errors.confirmPassword && touched.confirmPassword)} */}
            {/*  helperText={generateError(errors, touched, 'confirmPassword')} */}
            {/*  onChange={handleChange} */}
            {/*  onBlur={handleBlur} */}
            {/* /> */}
          </div>
          <Button
            fullWidth
            size={SIZE.BIG}
            onClick={() => handleSubmit()}
            disabled={!isValid || !dirty}
          >
            Далее
          </Button>
        </>
      )}
    </Formik>
  )
}
