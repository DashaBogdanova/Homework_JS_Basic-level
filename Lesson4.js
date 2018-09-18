ДЗ.
Задание 1:
- создать функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств
  и false – если хоть одно свойство есть.
  
  var obj={};
  alert( isEmpty(obj));
	function isEmpty(obj){
		for (var key in obj){ 
			return false;
		}
		return true;
	}
  

Задание 2:
- написать функцию pow(x,n), которая возвращает x в степени n,
  иначе говоря, умножает x на себя n раз и возвращает результат.
  Создать страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
  В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

  
  var x=+prompt('x');
  var n=+prompt('n');
  (isInteger(n) && n>=1)? alert( pow(x, n)): alert('Введите целую степень, большую 1');
  function isInteger(num) {
  return (num ^ 0) === num;
}
  function pow(x,n){
	var pow=x;
	for (var i=0; i<n; i++){
	pow*=x;
 }
 return pow;
  }
  
  
Задание 3 *:
- написать функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:
  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
  sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

   
  Сделать три варианта решения:
    - с использованием цикла.
	
	
	var n=+prompt('n');
   function sumTo(n){
		var sumTo=0;
		for (var i=n; i>=1; i--){
			sumTo+=n;
		}
		return sumTo;
    }
	alert( sumTo(n));
  
  
    - через рекурсию, sumTo(n) = n + sumTo(n-1) для n > 1.                                         не работает
	
	var n=+prompt('n');
	var sumTo=0;
	function sumTo(n){
		if (n==1){
			alert(sumTo(n));
		return;
		}
		sumTo+=n;
		n--;
	}
    - с использованием формулы для суммы арифметической прогрессии.
	
	var n=+prompt('n');
	function sumTo(n) {
		return n * (n + 1) / 2;
	}
	alert( sumTo(n));

	
  Какой вариант решения самый быстрый? Самый медленный? Почему?                                                  3-ий самый быстрый, т.к. в одно действие
  Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему?                                        хз