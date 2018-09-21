Задание 1:

var login = prompt('Введите ваш логин');
	if (login == 'Админ'){
		var password = prompt('Введите ваш пароль');
			if (password == 'Чёрный Властелин'){
			alert('Добро пожаловать!');
			} else if (password == null) {
			alert('Вход отменён');
			} else {
			alert('Пароль неверен');
			}
	} else if (login == null) {
	alert('Вход отменён');
	} else {
	alert('Я вас не знаю');
	}
	

Задание 2:
 
  var message = (login === 'Вася') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте':
    (login === '') ? 'Нет логина':
    '';
 
  
Задание 3:
- при помощи цикла for вывести чётные числа от 2 до 10. 

var i;
  for (i = 2; i < 11; i++) {
	if (i % 2 == 0) {
		alert( i );
	}
  }

  var arr = [];
  var value = prompt('Введите значение');
	if (value == '') {
 fruits.push(value);
} else if (login == '0') {
  message = 'Здравствуйте';
} else if (login == null) {
  message = 'Нет логина';
} else {
  getMaxSubSum(arr);
}
alert(getMaxSubSum(arr));




Задание 4

var arr = [];
	while (true) {
		var value = prompt('Введите значение', 0);
		if (value === '' || isNaN(value) || value === null) break;
		numbers.push(+value);
	}
var sum = 0;
	for (var i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	alert( sum );

