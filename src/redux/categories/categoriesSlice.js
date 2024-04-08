import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	list: [],
	
	isLoading: false,
}

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await axios(`https://api.escuelajs.co/api/v1/categories`)
		return await response.data
	}
)

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true
		})
		builder.addCase(fetchCategories.rejected, (state) => {
			state.isLoading = false
		})
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.isLoading = false
			state.list = action.payload.slice(0, 5)
		})
	},
})



export default categoriesSlice.reducer
