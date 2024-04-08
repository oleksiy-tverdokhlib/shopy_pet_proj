import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import {
	addItemToCart,
	removeItemFromCart,
	toggleForm,
} from '../../redux/user/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../common/routes'

const Cart = () => {
	const { cart, currentUser } = useSelector(({ user }) => user)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const changeQuantity = (item, quantity) => {
		dispatch(addItemToCart({ ...item, quantity }))
	}

	const removeItem = (id) => {
		dispatch(removeItemFromCart(id))
	}
	const handleClick = () => {
		if (!currentUser) dispatch(toggleForm(true))
		if (currentUser) navigate(ROUTES.PAYMENT)
	}

	const sumBy = (arr) => arr.reduce((prev, cur) => prev + cur, 0)
	return (
		<section className={styles.cart}>
			<h2 className={styles.title}>My cart</h2>
			{!cart.length ? (
				<>
					<Link to={'/'} className={styles.empty}>
						Cart is empty. Try to add something
					</Link>
				</>
			) : (
				<>
					<div className={styles.list}>
						{cart.map((item) => {
							const { title, category, images, price, id, quantity } = item

							return (
								<div className={styles.item} key={id}>
									<Link
										to={'/products/' + id}
										className={styles.image}
										style={{ backgroundImage: `url(${images[0]})` }}
									/>
									<Link to={'/products/' + id} className={styles.info}>
										<h3 className={styles.name}>{title}</h3>
										<div className={styles.category}>{category.name}</div>
									</Link>

									<div className={styles.price}>{price}$</div>

									<div className={styles.quantity}>
										<div
											className={styles.minus}
											onClick={() =>
												changeQuantity(item, Math.max(1, quantity - 1))
											}
										>
											-
										</div>

										<span>{quantity}</span>

										<div
											className={styles.plus}
											onClick={() =>
												changeQuantity(item, Math.max(1, quantity + 1))
											}
										>
											+
										</div>
									</div>

									<div className={styles.total}>{price * quantity}$</div>

									<div
										className={styles.close}
										onClick={() => removeItem(item.id)}
									>
										x
									</div>
								</div>
							)
						})}
					</div>

					<div className={styles.actions}>
						<div className={styles.total}>
							Total price:{' '}
							<span>
								{sumBy(cart.map(({ quantity, price }) => quantity * price))}$
							</span>
						</div>

						<button className={styles.proceed} onClick={handleClick}>
							Click to buy
						</button>
					</div>
				</>
			)}
		</section>
	)
}

export default Cart
