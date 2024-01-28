/*
*Кайль Ангелина
*/

alert("Введите двухзначное число");
var a = prompt("Введите а: ");
a = parseFloat(a);
var a1 = Math.floor(a / 10);
var a2 = (a % 10) * 10;
var resultat = a1 + a2
alert(resultat)