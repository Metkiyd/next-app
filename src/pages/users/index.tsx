import React, {useState} from 'react';
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

const Users: React.FC<TestType> = (props) => {
    const [users, setUsers] = useState(
        [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",

            }]
    )

    // console.log(props.name)
    return <div>
        Список сотрудников
    </div>
};

export default Users;