/* To use typewriter effect you need an element with some text content with two classes: `type` (obligatory) and another one - whatever you like, but also obligatory, because you pass that second class name int an onClick event function that invokes it.

The structure is: 
<p className="type myClass">Text to be shown with typewriter effect</p>
...
<button onClick={() => showInTypewriterEffect([`myClass`, true, 150])}>Show that text</button>

Where: 
first parameter: `myClass` is your element's class name,
second parameter: true - if element should fade away after 3.5 seconds, 
third parameter: 150 - milliseconds between each letter appear - default is 35
*/

export function typewriterEffect(classToType) {
	const timeout = classToType[2] || 20
	const fade = classToType[1] || true
	let typingEffect
	let textsToType
	if (classToType[0]) {
		textsToType = document.querySelector(`.${classToType[0]}`)
		if (textsToType.classList.contains(`visible`)) {
			return
		}
		const allLetters = textsToType.textContent.split('')
		textsToType.textContent = ``
		textsToType.classList.add('visible')
		let i = 0
		typingEffect = setTimeout(function run() {
			textsToType.textContent += allLetters[i]
			i++
			i < allLetters.length ? setTimeout(run, timeout) : postEffect()
		}, timeout)
	}
	const postEffect = () => {
		clearInterval(typingEffect)
		if (fade) {
			textsToType.classList.add('fadeOut')
			const fadeOut = setTimeout(() => {
				textsToType.classList.remove('visible')
				textsToType.classList.remove('fadeOut')
				clearTimeout(fadeOut)
			}, 3500)
		}
	}
}
