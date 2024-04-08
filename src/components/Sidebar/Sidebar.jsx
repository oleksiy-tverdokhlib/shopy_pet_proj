import { ROUTES } from '../../common/routes'
import styles from './Sidebar.module.css'
import CustomNavLink from '../../common/CustomNavLink'
import { useSelector } from 'react-redux'

const Sidebar = () => {
	const list = useSelector((store) => store.categories.list)

	const categories = list.map(({ id, name }) => (
		<li key={id}>
			<CustomNavLink to={ROUTES.CATEGORY + '/' + name}>{name}</CustomNavLink>
		</li>
	))
	return (
		<aside className={styles.sidebar}>
			<div className={styles.title}>Categories</div>
			<nav>
				<ul className={styles.list}>{categories}</ul>
			</nav>

			<div className={styles.footer}>
				<CustomNavLink to={ROUTES.HELP}>Help</CustomNavLink>
				<CustomNavLink to={ROUTES.TERMS}>Terms & Conditions</CustomNavLink>
			</div>
		</aside>
	)
}

export default Sidebar
