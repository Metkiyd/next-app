import React from 'react'

import { Button, SIZE, VARIANT } from '@/components/UI/Button'

import styles from '@/modules/Auth/components/SocialsConnect/styles.module.scss'

import { GoogleIcon, VkIcon, YandexIcon } from '@/assets/icons'

export const SocialsConnect = () => (
  <>
    <div className={styles.socials}>
      <Button fullWidth size={SIZE.SOCIAL} variant={VARIANT.OUTLINED}>
        <YandexIcon />
      </Button>
      <Button fullWidth size={SIZE.SOCIAL} variant={VARIANT.OUTLINED}>
        <VkIcon />
      </Button>
      <Button fullWidth size={SIZE.SOCIAL} variant={VARIANT.OUTLINED}>
        <GoogleIcon />
      </Button>
    </div>
    <div className={styles.divider}>
      <div className={styles.divider__line} />
      <p className={styles.divider__or}>или</p>
      <div className={styles.divider__line} />
    </div>
  </>
)
