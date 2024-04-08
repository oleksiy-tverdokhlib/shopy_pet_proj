import { useNavigate } from 'react-router-dom'
import styles from './Poster.module.css'

const Poster = () => {
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/')
	}
	return (
		<section className={styles.poster}>
			<div className={styles.title}>BIG SALE 30%</div>
			<div className={styles.product}>
				<div className={styles.text}>
					<div className={styles.subtitle}>Lorem ipsum dolor sit amet.</div>
					<h1 className={styles.head}>Lorem ipsum dolor sit amet.</h1>
					<button className={styles.button} onClick={handleClick}>
						Buy Now
					</button>
				</div>
			</div>
		</section>
	)
}
export default Poster
