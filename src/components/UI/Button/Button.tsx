import React from 'react'

import { IButtonProps, SIZE, VARIANT } from './Button.types'

import styles from './styles.module.scss'

export const Button: React.FC<IButtonProps> = ({
  size = SIZE.LARGE,
  variant = VARIANT.PRIMARY,
  children,
  startIcon,
  endIcon,
  fullWidth = false,
  ...rest
}) => {
  return (
    <button
      className={`${styles[size]} 
      ${fullWidth ? `${styles.full}` : ''}
      ${styles[variant]}
      ${styles.btn}`}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  )
}
