// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const seatsApi = createApi({
  reducerPath: 'seatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/seats' }),
  endpoints: (builder) => ({
    getallSeat: builder.query({
        query:()=>{
            return '/'
        }

    }),
    Updatetick:builder.mutation({
        query:(seats)=>{
            return{
                url:`/${seats.id}`,
                method:"put",
                body:seats
            }
        }
    }),
   

 }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetallSeatQuery,useUpdatetickMutation} = seatsApi