import React, { useEffect, useState } from 'react'
import './index.css'

function App() {
	const [level, setLevel] = useState(0)
	const [musicSrc, setMusicSrc] = useState(`./sounds/musicbox.mp3`)

	// access to audio element in root html - only that can play music
	const musicElement = Array.from(
		document.querySelector(`#root`).parentNode.children
	).find((el) => el.id === 'introMusic')

	// initial scripts start
	useEffect(() => {
		musicElement.play()
	})

	// change sound source and play - different background music fo every level
	useEffect(() => {
		musicElement.pause()
		musicElement.src = musicSrc
		musicElement.play()
	}, [musicSrc])

	/***  This is a hack I am proud of: CSS can play sounds by <embed> elements. It happens when they change display value from none to block. However it only plays once, so to achieve repeated sound (of clicks, door opened etc) - we clone embed, destroy it after sound has ended and append the clone to the root app, to be reused.*/

	/***  Here embeds are identified by their numbers (their classNames must be equivalent: embed nr 1 has class `embed1`) */
	function soundFromEmbed(nr, timeout) {
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
	return (
		<div className="App">
			<embed className="embed1" src="./sounds/arcade.wav" />
			<embed className="embed2" src="./sounds/ding.mp3" />
			{level === 0 ? (
				<div className="buttons">
					<p
						id="start"
						onClick={() => {
							soundFromEmbed(1, 1500)
						}}
					>
						HAPPY
					</p>
					<p
						id="quit"
						onClick={() => {
							soundFromEmbed(2, 2500)
						}}
					>
						LITTLE
					</p>
					<p
						id="full"
						onClick={() => {
							setLevel(1)
							setMusicSrc(`./sounds/crickets.wav`)
						}}
					>
						PEACH
					</p>
				</div>
			) : (
				<h1
					onClick={() => {
						setLevel(0)
						setMusicSrc(`./sounds/musicbox.mp3`)
					}}
				>
					LEVEL2
				</h1>
			)}
		</div>
	)
}

export default App
