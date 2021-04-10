import React, { useEffect, useState } from 'react'
import './index.css'
// import { soundFromEmbed } from './scripts/soundFromEmbed'
import { Controls } from './templates/Controls.jsx'
import { Level1 } from './templates/Level1.jsx'

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

	// return to main music motive when on main screen
	useEffect(() => {
		if (level === 0) {
			setMusicSrc('./sounds/musicbox.mp3')
		}
	}, [level])

	return (
		<div className="App">
			<embed className="embed1" src="./sounds/arcade.wav" />
			<embed className="embed2" src="./sounds/ding.mp3" />
			<embed className="embed3" src="./sounds/funny.mp3" />

			{level === 0 ? (
				<div className="buttons">
					<p
						onClick={() => {
							document
								.querySelector('body')
								.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))
						}}
					>
						QUIT
					</p>
					<p
						onClick={() => {
							setLevel(100)
						}}
					>
						CONTROLS
					</p>
					<p
						onClick={() => {
							setLevel(1)
						}}
					>
						PLAY
					</p>
				</div>
			) : level === 1 ? (
				<Level1 setLevel={setLevel} setMusicSrc={setMusicSrc} />
			) : (
				<Controls setLevel={setLevel} setMusicSrc={setMusicSrc} />
			)}
		</div>
	)
}

export default App
