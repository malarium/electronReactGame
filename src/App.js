import React, { useEffect } from 'react'
import './index.css'

function App() {
	useEffect(() => {
		const children = Array.from(
			document.querySelector(`#root`).parentNode.children
		)
		children.find((el) => el.id === 'introMusic').play()
		console.log(children.find((el) => el.id === 'introMusic'))
	}, [])
	return (
		<div className="App">
			<div className="buttons">
				<p id="start">HAPPY</p>
				<p id="quit">LITTLE</p>
				<p id="full">PEACH</p>
			</div>
		</div>
	)
}

export default App
