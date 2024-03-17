import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const tikecksApi = createApi({
    reducerPath: 'tikecks Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/tikecks' }),
    endpoints: (builder) => ({
      gettiketsByName: builder.query({
        query: (tikecks) => `?from=${tikecks.from}&to=${tikecks.to}`,
      }),
      getAlltikets:builder.query({
        query:(tikecks)=>{
          return `/${tikecks}`
        }
      }),
  
   }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const {useGettiketsByNameQuery,useLazyGettiketsByNameQuery,useGetAlltiketsQuery} =tikecksApi