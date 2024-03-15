// Need to use the React-specific entry point to import createApi
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/products' }),
  endpoints: (builder) => ({
    getAllProductsByName: builder.query({
      query: () => `/`,
    }),
    getProductsByName: builder.query({
      query: () => `/`,
    }),
 
    getProductsById:builder.query({
      query:(id)=>`/${id}`,
    
    }),  
    getorderByID:builder.query({
      query:(id)=>`/buyprouct/${id}`,
    
    }),
   deleteProduct:builder.mutation({
      query:(id)=>{
        return{
          url:`/${id}`,
          method:"DELETE"
        }
      }
    }),
    addProduct:builder.mutation({
      query:(newproduct)=>{
        return{
          url:`/`,
          method:"post",
          body:newproduct
        }
      }
    }),
    updataProduct:builder.mutation({
      query:(product)=>{
        console.log("pr"+product)
        return{
          url:`/${product.id}`,
          method:"put",
          body:product
          
        }
      }
    })
 }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetorderByIDQuery,useUpdataProductMutation,useGetProductsByNameQuery, useGetProductsByIdQuery,useAddProductMutation, useGetAllProductsByNameQuery,useDeleteProductMutation,useLazyGetAllProductsByNameQuery } = productApi