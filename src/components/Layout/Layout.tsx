import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <Link href='/users'>Список сотрудников</Link>
          <Link href='/'>Главная</Link>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Layout
