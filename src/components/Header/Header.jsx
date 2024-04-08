import styles from './Header.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

import AVATAR from '../../../public/images/avatar.png'
import SEARCH from '../../../public/images/search.png'
import { ROUTES } from '../../common/routes'
import CustomNavLink from '../../common/CustomNavLink'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductByName } from '../../redux/products/productsSlice'
import { toggleForm } from '../../redux/user/userSlice'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { currentUser, cart } = useSelector(({ user }) => user)
	const [value, setValue] = useState('')
	const [search, setSearch] = useState('')
	const [focus, setFocus] = useState(false)
	const { serched, isLoading } = useSelector(({ products }) => products)

	const list = isLoading
		? 'Loading...'
		: !serched.length
		? 'No results'
		: serched.map(({ title, images, id }) => {
				return (
					<Link
						key={id}
						to={`/products/${id}`}
						onClick={() => setValue('')}
						className={styles.item}
					>
						<div
							className={styles.image}
							style={{ backgroundImage: `url(${images[0]})` }}
						></div>
						<p className={styles.name}>{title}</p>
					</Link>
				)
		  })

	const handleOnChange = ({ target: { value } }) => {
		setSearch(value)
		dispatch(fetchProductByName(value))
	}
	const handleClick = () => {
		if (!currentUser) dispatch(toggleForm(true))
		if (currentUser) navigate('/profile')
	}

	useEffect(() => {
		if (!currentUser) return

		setValue(currentUser)
	}, [currentUser])

	return (
		<header className={styles.header}>
			<Link to={ROUTES.HOME} className={styles.title}>
				Shopy
			</Link>

			<div className={styles.account} onClick={handleClick}>
				<img
					className={styles.avatar}
					src={!currentUser?.avatar ? AVATAR : currentUser.avatar}
					alt="avatar"
				/>
				<div className={styles.username}>
					{!currentUser?.name ? 'username' : currentUser.name}
				</div>
			</div>

			<form className={styles.form}>
				<img className={styles.icon} src={SEARCH} alt="search icon" />
				<div className={styles.input}>
					<input
						type="search"
						name="search"
						placeholder="Search..."
						autoComplete="off"
						value={search}
						onChange={handleOnChange}
						onFocus={() => setFocus(true)}
					/>
					{search && list.length && <div className={styles.list}>{list}</div>}
				</div>
			</form>

			<div className={styles.container}>
				<CustomNavLink to={ROUTES.FAVOURITES}>Favourites</CustomNavLink>
				<CustomNavLink to={ROUTES.CART}>
					Cart
					{!!cart.length && (
						<span className={styles.count}>{' ' + cart.length}</span>
					)}
				</CustomNavLink>
			</div>
		</header>
	)
}

export default Header
