import React, { useRef } from 'react'
import './index.css'

function App() {
	const audioElement = useRef(null)
	const playSound = () => {
		console.log(`able to play`)
		audioElement.current.play()
	}
	// useEffect(() => {
	// 		audioElement.current.play()
	// }, [])
	return (
		<div className="App">
			<audio
				ref={audioElement}
				src="./assets/sounds/musicbox.mp3"
				crossOrigin="anonymous"
				onCanPlay={playSound}
			></audio>
			<div className="buttons">
				<p id="start" onClick={playSound}>
					START
				</p>
				<p id="quit">QUIT</p>
				<p id="full">FULLSCREEN</p>
			</div>
		</div>
	)
}

export default App
