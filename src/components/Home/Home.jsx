import React, { useEffect } from 'react'
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'
import { filterByPrice } from '../../redux/products/productsSlice'
import { randomProducts } from '../../common/randomFunc'

const Home = () => {
	const dispatch = useDispatch()
	const { products, filtered } = useSelector(({ products }) => products)
	const { list } = useSelector(({ categories }) => categories)

	useEffect(() => {
		if (!products.length) return
		dispatch(filterByPrice(30))
	}, [products.length, dispatch])

	return (
		<>
			<Poster />
			<Products
				products={randomProducts(products, 5)}
				title={'Trending products'}
			/>
			<Banner />
			<Categories categories={list} title={'Categories'} />
			<Products
				products={randomProducts(filtered, 5)}
				title={'Cheap products'}
			/>
		</>
	)
}

export default Home
