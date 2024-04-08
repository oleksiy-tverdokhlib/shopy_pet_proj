import styles from './Footer.module.css'
import INSTAGRAM from '../../../public/images/instagram.png'
import FACEBOOK from '../../../public/images/facebook.png'
import TELEGRAM from '../../../public/images/telegram.png'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.title}>Shopy</div>
			<p>&copy; 2024 My App. All rights reserved.</p>
			<div className={styles.socials}>
				<a href="https://instagram.com" target="_blank" rel="noreferrer">
					<img src={INSTAGRAM} className={styles.icon} alt="instagram link" />
				</a>

				<a href="https://facebook.com" target="_blank" rel="noreferrer">
					<img src={FACEBOOK} className={styles.icon} alt="facebook link" />
				</a>

				<a href="https://youtube.com" target="_blank" rel="noreferrer">
					<img src={TELEGRAM} className={styles.icon} alt="telegram link" />
				</a>
			</div>
		</footer>
	)
}

export default Footer
