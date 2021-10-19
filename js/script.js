console.log("Script loaded");

var display = document.getElementById("number-input");

var num0 = document.getElementById("0");
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");

var minus = document.getElementById("-");
var add = document.getElementById("+");
var devide = document.getElementById("/");
var multi = document.getElementById("*");
var equal = document.getElementById("=");
var clear = document.getElementById("c");

num0.onclick = function(input){
    display.value +='0';
}
num1.onclick = function(input){
    display.value +='1';
}
num2.onclick = function(input){
    display.value +='2';
}
num3.onclick = function(input){
    display.value +='3';
}
num4.onclick = function(input){
    display.value +='4';
}
num5.onclick = function(input){
    display.value +='5';
}
num6.onclick = function(input){
    display.value +='6';
}
num7.onclick = function(input){
    display.value +='7';
}
num8.onclick = function(input){
    display.value +='8';
}
num9.onclick = function(input){
    display.value +='9';
}
minus.onclick = function(input){
    display.value +='-';
}
add.onclick = function(input){
    display.value +='+';
}
devide.onclick = function(input){
    display.value +='/';
}
multi.onclick = function(input){
    display.value +='*';
}
equal.onclick = function(input){
    display.value = eval(display.value);
}
clear.onclick = function(input){
    display.value='';
}

