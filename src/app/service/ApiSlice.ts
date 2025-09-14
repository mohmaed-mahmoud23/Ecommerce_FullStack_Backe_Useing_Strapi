import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GetPrudacts = createApi({
  reducerPath: 'Prudacts',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    GetPrudactApi: builder.query({
      query: ({ page = 1 }) => ({
        url: `/api/pruducts?populate=category&populate=thumbnail&pagination[page]=${page}&pagination[pageSize]=7`,
      }),
    }),
  }),
})

export const { useGetPrudactApiQuery } = GetPrudacts
