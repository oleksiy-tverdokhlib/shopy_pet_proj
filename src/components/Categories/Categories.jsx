import styles from './Categories.module.css'
import { Link } from 'react-router-dom'

const Categories = ({ categories, title }) => {
	const categoriesList = categories.map(({ id, name, image }) => (
		<Link to={`/categories/${name}`} key={id} className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${image})` }}
			/>
			{/* <img src={image} className={styles.image} alt="category" /> */}
			<h3 className={styles.title}>{name}</h3>
		</Link>
	))

	return (
		<section className={styles.section}>
			<h2>{title}</h2>
			<div className={styles.list}>
				{!categoriesList.length ? 'Loading' : categoriesList}
			</div>
		</section>
	)
}

export default Categories
