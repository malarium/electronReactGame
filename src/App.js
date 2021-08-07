import React, { useEffect, useState, useRef } from 'react'
import './index.css'
import { soundFromEmbed } from './scripts/soundFromEmbed'
import { Controls } from './templates/Controls.jsx'
import { Level1 } from './templates/Level1.jsx'
import { Inventory } from './templates/Inventory.jsx'
import { setCursorImg } from './scripts/setCursorImg'

function App() {
	const [level, setLevel] = useState(0)
	const [inventory, setInventory] = useState([
		{ name: `Medicine`, img: `medicine.png`, data: {} },
		{ name: `Rope`, img: `rope.png`, data: {} },
		{ name: `Rolling pin`, img: `rollingPin.png`, data: {} },
		{},
		{},
	])
	const [currentInventoryItem, setCurrentInventoryItem] = useState({});
	const [musicSrc, setMusicSrc] = useState(`./sounds/crickets.wav`);
	const [keyPressed, setKeyPressed] = useState();
	const [clickOccurred, setClickOccurred] = useState();
	const mainAppRef = useRef();
	let inventoryElement;

	// access to audio element in root html - only that can play music
	const musicElement = Array.from(
		document.querySelector(`#root`).parentNode.children
	).find((el) => el.id === 'introMusic');

	// initial scripts start
	useEffect(() => {
		musicElement.play();
		inventoryElement = document.querySelector('.inventory');
		mainAppRef.current.addEventListener(`click`, setClickOccurred);
		mainAppRef.current.parentNode.parentNode.addEventListener(`keypress`, setKeyPressed)
	})

	useEffect(() => {
		keyAction(keyPressed);
	}, [keyPressed])

	useEffect(() => {
		mouseAction(clickOccurred)
	}, [clickOccurred])

	// change sound source and play - different background music fo every level
	useEffect(() => {
		musicElement.pause()
		musicElement.src = musicSrc
		musicElement.play()
	}, [musicSrc])

	useEffect(() => {
		if (currentInventoryItem.img) {
			setCursorImg(currentInventoryItem.name)
		} else {
			setCursorImg('')
		}
	}, [currentInventoryItem])

	// return to main music motive when on main screen
	useEffect(() => {
		if (level === 0) {
			setMusicSrc('./sounds/crickets.wav')
		}
		if (level === 0 || level === 100) {
			// eslint-disable-next-line no-unused-expressions
			inventoryElement.classList.contains(`showInventory`)
				? toggleInventoryVisibility()
				: null
		}
	}, [level])

	const keyAction = (e) => {
		console.log(`Key was pressed: `, e.code)
		if(e.code === `Space` && level > 0 && level < 100) {
			toggleInventoryVisibility()
		}
	}
	const mouseAction = (e) => {
		console.log(`Mouse was clicked on: `, e.target)
	}

	const toggleInventoryVisibility = () => {
		setCursorImg('')
		inventoryElement.classList.toggle('showInventory')
		soundFromEmbed(5)
	}

	const removeItemFromInventory = () => {
		const newInventory = []
		Array.from(inventory).forEach((el) => {
			if (el.name === currentInventoryItem.name) {
				el = {}
			}
			newInventory.push(el)
		})
		setInventory(newInventory)
		console.log(currentInventoryItem)
		setCurrentInventoryItem({})
		console.log(currentInventoryItem)
	}

	return (
		<div className="App" ref={mainAppRef}>
			<embed className="embed1" src="./sounds/clack.mp3" data-timeout="750" />
			<embed className="embed2" src="./sounds/ding.mp3" data-timeout="1500" />
			<embed
				className="embed3"
				src="./sounds/door_creak.mp3"
				data-timeout="1000"
			/>
			<embed
				className="embed4"
				src="./sounds/emptyInv.mp3"
				data-timeout="500"
			/>
			<embed
				className="embed5"
				src="./sounds/invToggle.mp3"
				data-timeout="500"
			/>

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
				<Level1
					setLevel={setLevel}
					setMusicSrc={setMusicSrc}
					currentInventoryItem={currentInventoryItem}
					removeItemFromInventory={removeItemFromInventory}
				/>
			) : (
				<Controls setLevel={setLevel} setMusicSrc={setMusicSrc} />
			)}
			<Inventory
				inventory={inventory}
				currentInventoryItem={currentInventoryItem}
				setCurrentInventoryItem={setCurrentInventoryItem}
			/>
			{level > 0 && level < 100 ? (
				<div className="toggleInventory" onClick={toggleInventoryVisibility}>
					i
				</div>
			) : null}
		</div>
	)
}

export default App
