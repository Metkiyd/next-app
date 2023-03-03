import React, { useState } from 'react'

import { PriceCard } from '@/components/PriceCards/PriceCard'

import { tariffs } from '@/constants/tariffs'

import type { PComponentType } from '@/components/PriceCards/'

import styles from './styles.module.scss'

export const PriceCardsComponent: React.FC<PComponentType> = ({ isOn }) => {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className={styles.storybook}>
      {tariffs.map((item) => (
        <PriceCard
          isOn={isOn}
          key={item.id}
          tariff={item}
          cardId={item.id}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  )
}
