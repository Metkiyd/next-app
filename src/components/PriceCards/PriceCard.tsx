import React from 'react'

import { Button, SIZE, VARIANT } from '@/components/UI/Button'

import type { CardsType } from '@/components/PriceCards'

import styles from './styles.module.scss'

import { PriceFocus, Success } from '@/assets/icons'

export const PriceCard: React.FC<CardsType> = ({
  tariff,
  cardId,
  activeCard,
  setActiveCard,
  isOn,
}) => {
  const handleActive = (cardIndex: number) => {
    setActiveCard(cardIndex)
  }

  const activeClass = cardId === activeCard ? styles.active : ''

  return (
    <div
      className={`${styles.container} ${activeClass}`}
      onClick={() => handleActive(cardId)}
    >
      <div className={styles.circle}>
        {activeClass ? <PriceFocus /> : <>{tariff.icon}</>}

        {tariff.sale ? (
          <div
            className={`${styles.sale} 
            ${styles.promo}`}
          >
            <span>Скидка 20%</span>
          </div>
        ) : (
          ''
        )}
        {tariff.popular ? (
          <div
            className={`${styles.pop} 
            ${styles.promo}`}
          >
            <span>Популярный</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.tariff}>
        <p className={styles.title}>{tariff.title}</p>
        <div className={styles.value}>
          <span className={styles.price}>
            {isOn ? tariff.price : tariff.year} ₽
          </span>
          <span className={styles.month}>{isOn ? '/ мес' : '/ год'}</span>
        </div>
      </div>
      <div className={styles.advantages}>
        {tariff.advantage.map((item) => {
          return (
            <div className={styles.advantages__item} key={item}>
              {activeClass ? <Success /> : <>{tariff.check}</>}
              <span className={styles.advantages__text}>{item}</span>
            </div>
          )
        })}
      </div>
      <Button size={SIZE.BIG} variant={VARIANT.TERTIARY} fullWidth>
        Выбрать тариф
      </Button>
    </div>
  )
}
