import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { Character, GetCharacterResults } from '@/types'
import Image from 'next/image'
import User from '@/pages/users/[id]'

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//
// import type { Pokemon } from './types'

// export const pokemonApi = createApi({
//     reducerPath: 'pokemonApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query<Pokemon, string>({
//             query: (name) => `pokemon/${name}`,
//         }),
//     }),
// })

// export const { useGetPokemonByNameQuery } = pokemonApi

interface IUsersProps {
  id: number
  name: string
  username: string
}

type TestType = {
  email: string
} & IUsersProps

const Users: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    // <Layout>
    <div className={styles.description}>
      <h1>Список сотрудников</h1>

      <ul>
        {characters.map((character) => (
          <Link key={character.id} href={`/users/${character.id}`}>
            <div>
              <h3>{character.name}</h3>

              <Image
                src={character.image}
                alt={character.name}
                width='200'
                height='200'
              />
            </div>
          </Link>
        ))}
      </ul>
    </div>
    // </Layout>
  )
}
export default Users

Users.getLayout = function getLayout(page: typeof Users) {
  return <Layout>{page}</Layout>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character`)
  const { results }: GetCharacterResults = await response.json()

  return {
    props: {
      characters: results,
    },
  }
}
