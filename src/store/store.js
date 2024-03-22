import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tikecksApi } from '../servers/tikecks'
import { seatsApi } from '../servers/seat'
import { bookapi } from '../servers/book'
import { usersApi } from '../servers/users'
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [tikecksApi.reducerPath]: tikecksApi.reducer,
    [seatsApi.reducerPath]: seatsApi.reducer,
    [bookapi.reducerPath]: bookapi.reducer,
    [usersApi.reducerPath]:usersApi.reducer

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tikecksApi.middleware,seatsApi.middleware,bookapi.middleware,usersApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)