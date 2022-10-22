import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const rentalApi = createApi({
  reducerPath: 'rentalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    cars: builder.query({
      query: () => '/cars',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export default rentalApi;