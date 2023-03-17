import React from 'react'

import { WelcomeSliderComponent } from '@/modules/Auth/components/WelcomeSlider'

import styles from './styles.module.scss'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className={styles.layout_container}>
    <div className={styles.slider_container}>
      <WelcomeSliderComponent />
    </div>
    <div className={styles.form_container}>{children}</div>
  </div>
)

export const getSliderLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
)
