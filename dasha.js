<script type="text/javascript">
    <!--/Task 1/ -->
var number1, number2;
number1 = prompt("Введите первое число", '');
number2 = prompt("Введите второе число", '');
number1 = Number(number1);
number2 = Number(number2);
alert("При операции сложения получим " + (number1+number2));
alert("При операции вычитания получим " + (number1-number2));
alert("При операции умножения получим " + (number1*number2));
alert("При операции деления получим " + (number1/number2));
    
    <!--/Task 2 вариант1/ -->
var number1, minus, plus, multiply, divide, result;
number1 = prompt('Введите число', '');
minus = prompt('Сколько отнять', '');
plus = prompt('Сколько прибавить', '');
multiply = prompt('На сколько умножить', '');
divide = prompt('На сколько разделить', '');
number1 = Number(number1);
minus = Number(minus);
plus = Number( plus);
multiply = Number( multiply);
divide = Number(divide);
result = ((number1-minus+plus)*multiply/divide);
alert(number1 + '-' + minus + '+' + plus + '*' + multiply + '/' + divide + ' = ' + result);
    
     <!--/Task 2 вариант2/ -->
var numberOrigin, numberNew, minus, plus, multiply, divide, result;
numberOrigin = prompt('Введите число', '');
minus = prompt('Сколько отнять', '');
plus = prompt('Сколько прибавить', '');
multiply = prompt('На сколько умножить', '');
divide = prompt('На сколько разделить', '');
numberOrigin  = Number(numberOrigin);
numberNew = numberOrigin;
minus = Number(minus);
plus = Number( plus);
multiply = Number( multiply);
divide = Number(divide);
result = numberNew-=minus;
result = numberNew+=plus;
result = numberNew*=multiply;
result = numberNew/=divide;
alert(numberOrigin + '-' + minus + '+' + plus + '*' + multiply + '/' + divide + ' = ' + result);
    
    <!--/Task 3 вариант 1/ -->
var a, b; 
a +=b;
b = a-b;
a -=b;
 <!--/Task 3 вариант 2/ -->
var a, b;    
b=a+(a=b)-b;

c=a;
a=b;
b=c;

[a,b]=[b,a]

b=[a,a=b]
</script>