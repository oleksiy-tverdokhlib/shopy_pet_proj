import styles from './Products.module.css'
import ProductElement from './ProductElement'
import { useEffect } from 'react'

const Products = ({ products, title }) => {
	return (
		<>
			<section className={styles.products}>
				<h2>{title}</h2>

				{!products.length ? (
					'No results or API problems'
				) : (
					<div className={styles.list}>
						{products.map((e, i) => {
							return <ProductElement key={e.id} {...e} />
						})}
					</div>
				)}
			</section>
		</>
	)
}

export default Products
