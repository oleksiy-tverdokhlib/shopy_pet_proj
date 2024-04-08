import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/user/userSlice'

const SIZES = ['S', 'M', 'L']

const Product = (item) => {
	const dispatch = useDispatch()
	const { id, title, price, description, images, category } = item
	const [currentImage, setCurrentImage] = useState(images[0])
	const [currentSize, setCurrentSize] = useState(SIZES[0])

	const addToCart = () => {
		dispatch(addItemToCart(item))
	}

	useEffect(() => {
		setCurrentImage(images[0])
		setCurrentSize(SIZES[0])
	}, [id])

	return (
		<section className={styles.product}>
			<div className={styles.images}>
				<div
					className={styles.current}
					style={{ backgroundImage: `url(${currentImage})` }}
				/>

				<div className={styles['images-list']}>
					{images.map((image, i) => (
						<div
							key={i}
							className={styles.image}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => setCurrentImage(image)}
						/>
					))}
				</div>
			</div>

			<div className={styles.info}>
				<h2 className={styles.title}>
					{category.name}/ {title}
				</h2>
				<div className={styles.price}>
					{Math.floor(price * 0.8)}$
					<span className={styles.oldPrice}>{price}$</span>
				</div>
				<div className={styles.color}>
					<span>Color:</span> Lorem
				</div>
				<div className={styles.sizes}>
					<span>Sizes:</span>

					<div className={styles.list}>
						{SIZES.map((size) => (
							<div
								onClick={() => setCurrentSize(size)}
								className={`${styles.size} ${
									currentSize === size ? styles.active : ''
								}`}
								key={size}
							>
								{size}
							</div>
						))}
					</div>
				</div>

				<p className={styles.description}>{description}</p>

				<div className={styles.actions}>
					<button
						onClick={addToCart}
						className={styles.add}
						// disabled={!currentSize}
					>
						Add to cart
					</button>
					<button className={styles.favourite} onClick={() => {}}>
						Add to favourites
					</button>
				</div>

				<div className={styles.bottom}>
					<div className={styles.purchase}>21 people purchased</div>

					<Link className={styles.link} to={'/'}>
						Return to store
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Product
