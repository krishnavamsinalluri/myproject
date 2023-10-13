import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  hospApi  from '../servivces/hospApi'

export const store = configureStore({
  reducer: {

    [hospApi.reducerPath]: hospApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hospApi.middleware),
})

setupListeners(store.dispatch)