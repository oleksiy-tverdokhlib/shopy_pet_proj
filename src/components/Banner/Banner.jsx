import styles from './Banner.module.css'

const Banner = () => {
	return (
		<section className={styles.banner}>
			<div className={styles.left}>
				<p className={styles.content}>
					Lorem ipsum
					<span>SALE</span>
				</p>
				<button className={styles.more}>see more</button>
			</div>
			<div
				className={styles.right}
				style={{
					backgroundImage:
						'url(https://w7.pngwing.com/pngs/148/870/png-transparent-sales-sale-tag-sale-tag-text-logo.png)',
				}}
			></div>
		</section>
	)
}

export default Banner
