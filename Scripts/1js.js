//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ClassWork

// let yyyy = +prompt('year');
// let tmp = typeof yyyy == "number" ? yyyy : 0;
// let res = tmp % 4 == 0 ? "Yes" : "No";

// console.log("Vis? ", res);



// console.log( 2 + 6 / ( 1 + 2 ) );



// let x = +prompt('Введите X');
// console.log( x > 0 && x < 9 ? "В диапазоне" : "Вне диапазона");



// let x = +prompt('Введите X');
// console.log( x > 0 && x < 9 && x % 2 == 0 ? "В диапазоне" : "Вне диапазона");



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~HomeWork

let res = prompt("Your name: ");
alert("Hello, " + res + " !");

const currentYear = 2021;
let birthYear = +prompt("Year of your birthday?");
alert("Now you " + (currentYear - birthYear) + " years old");

let a = +prompt("Enter one side of square:");
alert("Perimeter = " + (a * 4));

let b = +prompt("Enter radius of circle:");
alert("Area of a circle = " + (3.14 * b ** 2) );

let way = +prompt("Enter distance (km):");
let time = +prompt("Enter time (h):");
alert("You must go with speed: " + (way / time) + "km/h");

const rate = 0.85;
let dollars = +prompt("Enter dollars:");
alert("Current Exchange rate (18.07.2021): " + rate + "\n" + dollars + " dollar(s) = " + (dollars * rate) + " euro");

let threeDigit = +prompt("Enter three-digit number").split("").reverse().join("") ;
if(threeDigit.toString().length == 3){
    alert(threeDigit);
}
else{
    alert("YOU MUST ENTER 3 NUMBERS !!!");
}

let x = +prompt('Enter X');
alert( x % 2 == 0 ? "Even number" : "Odd number");