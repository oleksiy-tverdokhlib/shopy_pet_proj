import { Link } from 'react-router-dom'
import styles from './Products.module.css'

const ProductElement = ({ id, images, title, price, category }) => {
	return (
		<div className={styles.product}>
			<Link to={`/products/${id}`}>
				<div
					className={styles.image}
					style={{ backgroundImage: `url(${images[0]})` }}
				/>

				<div className={styles.wrapper}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.category}>{category.name}</div>
					<div className={styles.info}>
						<div className={styles.price}>
							<div className={styles.newPrice}>{Math.floor(price * 0.8)}$</div>
							<div className={styles.oldPrice}>{price}$</div>
						</div>

						<div className={styles.purchases}>
							{Math.floor(Math.random() * 30 + 1)} purchased
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default ProductElement
