import React, { useRef, useEffect } from 'react'
import './index.css'

function App() {
	const audioElement = useRef(null)
	useEffect(() => {
		audioElement.current.play();
	}, [])
	return (
		<div className="App">
			<audio
				ref={audioElement}
				src="./assets/sounds/musicbox.mp3"
				// src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
				// onCanPlay={playSound}
				// crossOrigin="anonymous"
			></audio>
			<div className="buttons">
				<p id="start">
					START
				</p>
				<p id="quit">QUIT</p>
				<p id="full">FULLSCREEN</p>
			</div>
		</div>
	)
}

export default App
