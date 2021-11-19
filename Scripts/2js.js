/*first*********************************************************/

do {
    age = +prompt("Enter your age (number)");
} while(isNaN(age) || age <= 0);

if(age >= 0 && age < 12){
    age = "Y`re child";
}
else if(age < 18){
    age = "Y`re teenager";
}
else if(age < 60){
    age = "Y`re adult";
}
else if(age >= 60){
    age = "Y`re pensioner";
}

console.log(age);

/*second*********************************************************/

do{
    key = +prompt("Enter one digit (from 0 to 9)");
} while(key.toString().length != 1);

let symbol = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];

console.log(symbol[key]);

/*third***********************************************************/

do{
    threeDigit = prompt("Enter three-digit number");
} while(threeDigit.length != 3 || isNaN(threeDigit));

let firstDigit = threeDigit.slice(0, -2);
let secondDigit = threeDigit.slice(1, -1);;
let thirdDigit = threeDigit.slice(2);;

if(firstDigit == secondDigit || firstDigit == thirdDigit || secondDigit == thirdDigit)
    console.log("Yes");
else
    console.log("No");

/*nineth***********************************************************/

do{
    ready = confirm("Are you ready ? ");
} while( ready == false );

res = 0;

firstquestion = prompt("What is the current year (number) ?");
firstquestion == 2021 ? res += 2 : res += 0;

secondquestion = prompt("How much minutes in one hour (number)?");
secondquestion == 60 ? res += 2 : res += 0;

thirdquestion = prompt("Who is the first russian astronaut (surname) ?");
thirdquestion == "Gagarin" || "gagarin" ? res += 2 : res += 0;

console.log ("Your mark: " , res , " points");