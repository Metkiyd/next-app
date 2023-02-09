import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'
import styles from '@/styles/Home.module.css'
import { Character } from '@/types'
import Image from 'next/image'
import { GetServerSideProps } from 'next'

const User = ({ character }: { character: Character }) => {
  const { query } = useRouter()
  return (
    // <Layout>
    <div className={styles.description}>
      <h1>Карточка сотрудника {query.id}</h1>
      <div>Полное Имя - {character.name}</div>
      <Image
        src={character.image}
        alt={character.name}
        width='200'
        height='200'
      />
    </div>
    // </Layout>
  )
}
export default User

User.getLayout = function getLayout(page: typeof User) {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`,
  )
  const character = await response.json()

  return {
    props: { character },
  }
}

// export async function getServerSideProps({
//   params,
// }: {
//   params: { id: string }
// }) {
//   const response = await fetch(
//     `https://rickandmortyapi.com/api/character/${params.id}`,
//   )
//   const character = await response.json()
//
//   return {
//     props: { character },
//   }
// }
