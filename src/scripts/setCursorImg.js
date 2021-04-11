export function setCursorImg(el) {
	const AppElement = document.querySelector('.App')
	AppElement.removeAttribute('class')
	AppElement.classList.add('App')
	if (el !== '') {
		AppElement.classList.add(`${el.replace(' ', '').toLowerCase()}`)
	}
}
