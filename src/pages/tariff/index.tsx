import React, { useState } from 'react'
import { NextPage } from 'next'

import { PriceCardsComponent } from '@/components/PriceCards'
import { ToggleButton } from '@/components/ToggleButton'

import styles from './styles.module.scss'

const Tariff: NextPage = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>
            Выберите <br /> тариф
          </p>
          <ToggleButton value={isOn} onChange={handleToggle} />
        </div>
        <div className={styles.main}>
          <PriceCardsComponent isOn={isOn} />
        </div>
      </div>
    </div>
  )
}

export default Tariff
