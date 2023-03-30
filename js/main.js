const age = prompt('Ваш возраст?')

if (+age > 18) {
	const name = prompt('Укажите ваше имя')
	alert('Привет ' + name)
	confirm('Понравилось ли тебе общаться с браузером?')
} else {
	alert('Подождите пока вам исполниться 18 лет')
}
