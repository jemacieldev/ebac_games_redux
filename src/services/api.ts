import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { buffer } from 'stream/consumers'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }), // Adicione a vírgula aqui

  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
