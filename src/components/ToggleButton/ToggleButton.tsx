import React from 'react'

import { IToggleProps } from '@/components/ToggleButton/ToggleButton.types'

import styles from './styles.module.scss'

export const ToggleButton: React.FC<IToggleProps> = ({ value, onChange }) => (
  <div className={styles.container}>
    <input
      id='toggle-on'
      className={`${styles.toggle} ${styles.toggleLeft}`}
      name='toggle'
      type='radio'
      checked={value}
      onChange={onChange}
    />
    <label htmlFor='toggle-on' className={styles.btn}>
      Ежемесячный
    </label>
    <input
      id='toggle-off'
      className={`${styles.toggle} ${styles.toggleRight}`}
      name='toggle'
      type='radio'
      checked={!value}
      onChange={onChange}
    />
    <label htmlFor='toggle-off' className={styles.btn}>
      Годовой
    </label>
  </div>
)
