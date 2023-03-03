import React from 'react'

export enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  BIG = 'big',
  SOCIAL = 'social',
}

export enum VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  TEXT = 'text',
  OUTLINED = 'outlined',
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE | SIZE.BIG | SIZE.SOCIAL
  variant?:
    | VARIANT.PRIMARY
    | VARIANT.SECONDARY
    | VARIANT.TERTIARY
    | VARIANT.TEXT
    | VARIANT.OUTLINED
  children?: React.ReactNode
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
}
