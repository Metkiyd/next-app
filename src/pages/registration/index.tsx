import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import Link from 'next/link'

import { SocialsConnect } from '@/modules/Auth/components/SocialsConnect'
import { RegistrationForm } from '@/modules/Auth/components/Forms'
import { getSliderLayout } from '@/modules/Auth/components/Layout'

import styles from '@/pages/auth/styles.module.scss'

const Registration: NextPageWithLayout = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.header__title}>Регистрация</h1>
    </div>
    <SocialsConnect />
    <RegistrationForm />
    <div className={styles.account}>
      <span>У вас уже есть аккаунт?</span>
      <span className={styles.account__action}>
        <Link href='/auth/login'>Войти</Link>
      </span>
    </div>
  </div>
)

Registration.getLayout = getSliderLayout

export default Registration
