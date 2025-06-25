module.exports = function toReadable(number) {
	// Создаем массивы 
	const onesDigitArr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const tensDigitArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	const tenToNineteenArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	// Создаем переменные 
	let onesDigitStr = '';
	let tensDigitStr = '';
	let hundredsDigitStr = '';
	// Проверка для нуля
	if (number === 0) {
		return 'zero';
	}
	// Делим входные данные на массив 
	number = number.toString().split('');

	// Проверка на числа с 10 до 19
	if (number[number.length - 2] === '1') {
		for (let i = 0; i <= number[number.length - 1]; i++) {
			tensDigitStr = `${tenToNineteenArr[i]}`;
		}
	}
	else {
		// Присваиваем onesDigitStr значение разряда единиц из массива onesDigitArr
		if (number[number.length - 1] !== undefined) {
			for (let i = 0; i <= number[number.length - 1]; i++) {
				onesDigitStr = `${onesDigitArr[i]}`;
			}
		}
		// Присваиваем tensDigitStr значение разряда десятков из массива tensDigitArr
		if (number[number.length - 2] !== undefined) {
			for (let i = 2; i <= number[number.length - 2]; i++) {
				// Убираем лишний пробел, когда разряд десятков равен 0
				if (i === 0) {
					tensDigitStr = `${tensDigitArr[i - 2]}`;
				}
				else {
					tensDigitStr = `${tensDigitArr[i - 2]} `;
				}
			}
		}
	}
	// Присваиваем hundredsDigitStr значение разряда сотен из массива onesDigitArr и добавляем "hundred"
	if (number[number.length - 3] !== undefined) {
		for (let i = 1; i <= number[number.length - 3]; i++) {
			hundredsDigitStr = `${onesDigitArr[i]} hundred `;
		}
	}
	// Возвращаем готовую строку, удаляя лишние пробелы
	return `${hundredsDigitStr}${tensDigitStr}${onesDigitStr}`.trim();
}