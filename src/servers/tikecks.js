import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const tikecksApi = createApi({
    reducerPath: 'tikecks Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/tikecks' }),
    endpoints: (builder) => ({
      gettiketsByName: builder.query({
        query: (tikecks) => `?from=${tikecks.from}&to=${tikecks.to}`,
      }),
      getElurubus:builder.query({
        query:(tikecks)=>{
          return `/tikecks${tikecks.id}`
        }
      })
  
   }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const {useGettiketsByNameQuery,useLazyGettiketsByNameQuery,useGetElurubusQuery} =tikecksApi