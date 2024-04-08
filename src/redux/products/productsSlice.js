import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	products: [],
	filtered: [],
	related: [],
	serched: [],
	productsByCategory: [],
	allProductsByCategory: [],
	isLoading: false,
}

export const fetchproducts = createAsyncThunk(
	'products/fetchproducts',
	async () => {
		const response = await axios(`https://api.escuelajs.co/api/v1/products`)
		return await response.data
	}
)

export const fetchProductByName = createAsyncThunk(
	'products/fetchProductByName',
	async (name) => {
		const response = await axios(
			`https://api.escuelajs.co/api/v1/products/?title=${name}`
		)
		return response.data
	}
)

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice(state, action) {
			state.filtered = state.products.filter(
				({ price }) => Math.floor(price * 0.8) < action.payload
			)
		},
		findRelatedProducts(state, action) {
			state.related = state.products.filter(
				(e) => e.category.name == action.payload.category.name
			)
		},
		getProductsByCategory(state, action) {
			state.allProductsByCategory = state.products.filter(
				(e) => e.category.name === action.payload
			)
		},
		getMoreProductsByCategory(state, action) {
			state.productsByCategory = state.allProductsByCategory.slice(
				0,
				5 * action.payload
			)
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchproducts.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchproducts.rejected, (state) => {
			state.isLoading = false
		})
		builder.addCase(fetchproducts.fulfilled, (state, action) => {
			state.isLoading = false
			state.products = action.payload
			state.related = action.payload
		})
		builder.addCase(fetchProductByName.fulfilled, (state, action) => {
			state.serched = action.payload
			state.isLoading = false
		})
	},
})
export const {
	filterByPrice,
	findRelatedProducts,
	getProductsByCategory,
	getMoreProductsByCategory,
} = productsSlice.actions

export default productsSlice.reducer
