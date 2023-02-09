import React from 'react'

export interface IButtonProps {
  size: string,
  type: string,
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  children?: React.ReactNode,
  onClick: () => void

}