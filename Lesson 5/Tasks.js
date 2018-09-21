ДЗ.
Задание 1:
- написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
function palindrom(str) {
    str=str.toLowerCase().replace(this, '');
    var len = str.length;
    
    for (var i=0; i<len/2; i++){
        if (str[i] !== str[len-1-i]){
            return false;
        }
    }
    return true;
}
palindrom ("шалаш");

Задача 2:
- написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).




function anagram(str1, str2) {

 if(str1.length != str2.length)
       return false;

 var tempString1 = str1.toLowerCase();
 var tempString2 = str2.toLowerCase();

 var cnt = 0;
 while(tempString1.length){
    if(tempString2.length < 1)
        break;
    if(tempString2.indexOf(tempString1[cnt]) > -1 )
        tempString2 = tempString2.replace(tempString1[cnt],'');
    else
        return false;

    cnt++;
 }

 return true ;

 }
 anagram("кот","отк");





Задача 3 *:
- написать функцию, которая будет возвращать количество гласных в переданном тексте.

Задача 4 *:
- написать функцию, которая будет принимать текст в качестве параметра. Текст необходимо разбить на предложения
 (по точкам, восклицательным и вопросительным знакам - убрав их). Для каждого из предложений вывести текст предложения
 и рядом количество букв в нем (без пробелов, запятых и тд - именно букв).

Задача 5 *:
- переписать пузырьковую сортировку, используя только внутренний цикл и рекурсию