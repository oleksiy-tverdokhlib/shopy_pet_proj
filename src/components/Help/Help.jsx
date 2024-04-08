import styles from './Help.module.css'

const Help = () => {
	return (
		<section className={styles.container}>
			<h2>Need Help?</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
				felis vel augue pharetra dignissim eu eu magna. Nullam vitae leo ut
				massa ultricies dictum. Vivamus vel accumsan ante. Duis nec nisl et arcu
				tincidunt feugiat. Nullam quis vehicula purus. Vivamus eu quam nec
				turpis convallis hendrerit.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
				felis vel augue pharetra dignissim eu eu magna. Nullam vitae leo ut
				massa ultricies dictum. Vivamus vel accumsan ante. Duis nec nisl et arcu
				tincidunt feugiat. Nullam quis vehicula purus. Vivamus eu quam nec
				turpis convallis hendrerit.
			</p>
			<div className={styles.credits}>
				<p className={styles.info}>
					If you have any questions or need assistance, please feel free to
					contact our support team.
				</p>
				<p className={styles.email}>Email: support@example.com</p>
				<p className={styles.phone}>Phone: 123-456-7890</p>
			</div>
		</section>
	)
}

export default Help
