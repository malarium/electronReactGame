/***  This is a hack I am proud of: CSS can play sounds by <embed> elements. It happens when they change display value from none to block. However it only plays once, so to achieve repeated sound (of clicks, door opened etc) - we clone embed, destroy it after sound has ended and append the clone to the root app, to be reused.*/

export function soundFromEmbed(nr, timeout) {
	const currentEmbed = Array.from(document.querySelectorAll(`.embed${nr}`))
	const currentSrc = currentEmbed[0].src
	currentEmbed[0].classList.add(`play`)
	setTimeout(() => {
		const appContainer = document.querySelector(`.App`)
		currentEmbed.forEach((em) => em.remove())
		const embedClone = document.createElement(`embed`)
		embedClone.src = currentSrc
		embedClone.classList.add(`embed${nr}`)
		appContainer.appendChild(embedClone)
	}, timeout)
}
