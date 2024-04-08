export function randomProducts(payload, amount) {
	let counter = 0
	const array = []
	const usedIndices = []

	while (counter < amount && usedIndices.length < payload.length) {
		const randomIndex = Math.floor(Math.random() * payload.length)
		if (!usedIndices.includes(randomIndex)) {
			array.push(payload[randomIndex])
			usedIndices.push(randomIndex)
			counter++
		}
	}
	return array
}
