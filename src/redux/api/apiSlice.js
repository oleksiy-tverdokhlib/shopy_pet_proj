import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.escuelajs.co/api/v1/',
	}),
	endpoints: (builder) => ({
		getSingleProduct: builder.query({
			query: (id) => `products/${id}`,
		}),
	}),
})

export const { useGetSingleProductQuery, useGetProductsQuery } = apiSlice
