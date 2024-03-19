import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const bookapi = createApi({
    reducerPath: 'book Api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/book' }),
    endpoints: (builder) => ({
      getbooking: builder.query({
        query:()=>{
            return "/"
        }
      }),
      Addbook:builder.mutation({
        query:(newbook)=>{
            return{
                url:`/`,
                method:"post",
                body:newbook
            }
        }
      })
   }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const {useAddbookMutation,useGetbookingQuery} =bookapi