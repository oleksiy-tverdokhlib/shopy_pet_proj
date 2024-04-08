import { useDispatch, useSelector } from 'react-redux'
import Poster from '../Poster/Poster.jsx'
import {
	getMoreProductsByCategory,
	getProductsByCategory,
} from '../../redux/products/productsSlice.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../Products/Products.jsx'

const CategoryPage = () => {
	const { name } = useParams()
	const [counter, setCounter] = useState(1)

	const dispatch = useDispatch()
	const { products, productsByCategory } = useSelector(
		({ products }) => products
	)

	const handleClick = () => {
		setCounter((v) => v + 1)
		dispatch(getMoreProductsByCategory(counter + 1))
	}
	const handleReset = () => {
		setCounter(1)
		dispatch(getMoreProductsByCategory(1))
	}

	useEffect(() => {
		if (!productsByCategory || !products.length) return
		dispatch(getProductsByCategory(name))
		dispatch(getMoreProductsByCategory(counter))
	}, [name, dispatch, products.length, productsByCategory.length])

	return (
		<>
			<Poster />
			<Products
				products={productsByCategory}
				title={name + ' category products'}
			/>
			<button onClick={handleClick}>More</button>
			<button onClick={handleReset}>Reset</button>
		</>
	)
}

export default CategoryPage
