import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout/Layout'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { Character, GetCharacterResults } from '@/types'
import Image from 'next/image'
import User from '@/pages/users/[id]'
import { useAppDispatch, useAppSelector } from '@/store'
import { selectUserData, setUserData } from '@/store/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

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

const Users: NextPage<{ characters: Character[] }> = ({ characters }) => {
  const dispatch = useDispatch()

  const getData = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`)
    const { results }: GetCharacterResults = await response.json()
    console.log('=>results', results)
    dispatch(setUserData(results))
  }

  useEffect(() => {
    getData()
  }, [])

  const userData = useSelector(selectUserData)
  console.log('=>userData1', userData)

  return (
    // <Layout>
    <div className={styles.description}>
      <h1>Список сотрудников</h1>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        {/*{userData.map((character) => (*/}
        {/*  <Link key={character.id} href={`/users/${character.id}`}>*/}
        {/*    <div>*/}
        {/*      <h3>{character.name}</h3>*/}

        {/*      <Image*/}
        {/*        src={character.image}*/}
        {/*        alt={character.name}*/}
        {/*        width='200'*/}
        {/*        height='200'*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </Link>*/}
        {/*))}*/}
      </ul>
    </div>
    // </Layout>
  )
}
export default Users

Users.getLayout = function getLayout(page: typeof Users) {
  return <Layout>{page}</Layout>
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const response = await fetch(`https://rickandmortyapi.com/api/character`)
//   const { results }: GetCharacterResults = await response.json()
//
//   return {
//     props: {
//       characters: results,
//     },
//   }
// }
