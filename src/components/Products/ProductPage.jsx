import React, { useEffect } from 'react'
import Product from './Product'
// import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { randomProducts } from '../../common/randomFunc'
import { useGetSingleProductQuery } from '../../redux/api/apiSlice'
import Products from './Products'
import { findRelatedProducts } from '../../redux/products/productsSlice'

const ProductPage = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const { data, error, isLoading, isFetching, isSuccess } =
		useGetSingleProductQuery(id)

	const { related } = useSelector(({ products }) => products)

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate('/')
		}
	}, [data, isLoading, isFetching, isSuccess, id])

	useEffect(() => {
		if (!data || !related.length) return
		dispatch(findRelatedProducts(data))
	}, [data, dispatch, related.length])

	return (
		<>
			{isLoading ? (
				<>Loading...</>
			) : (
				<>
					<Product {...data} />
					<Products
						products={randomProducts(related, 5)}
						title="Related products"
					/>
				</>
			)}
		</>
	)
}

export default ProductPage
