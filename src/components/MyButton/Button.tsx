import React from 'react'

import { IButtonProps } from '@/components/UI/Button'

import styles from './styles.module.scss'

import UnionIcon  from '@/assets/icons/union'

export const Button: React.FC<IButtonProps> = ({ size, type, onClick, children, startIcon, endIcon }) => {
  return (
    <button
      onClick={onClick}
      className={`${ styles[size] } ${ styles[type] } ${ styles.btn }`}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
    // <>
    //
    //   <div className={styles.container}>
    //
    //     <button
    //       className={`${ styles.big } ${ styles.disabled } ${ styles.btn }`}
    //     >
    //       <UnionIcon/>
    //       Buttonfdsfsdgsgsdgdsg
    //       <UnionIcon/>
    //     </button>
    //
    //     <button className={`${ styles.large } ${ styles.primary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Buttonfsdfgsdfsdfsdfsdfsdfs
    //       <UnionIcon/>
    //     </button>
    //
    //     <button className={`${ styles.medium } ${ styles.primary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //
    //     <button className={`${ styles.small } ${ styles.primary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //   </div>
    //
    //   <div className={styles.container}>
    //     <button className={`${ styles.big } ${ styles.secondary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //     <button className={`${ styles.large } ${ styles.secondary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //     <button className={`${ styles.medium } ${ styles.secondary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //     <button className={`${ styles.small } ${ styles.secondary } ${ styles.btn }`}>
    //       <UnionIcon/>
    //       Button
    //       <UnionIcon/>
    //     </button>
    //   </div>
    //
    //
    // </>
  )
}

