function first(a, b){
    if(a < b) return "-1";
    else if(a > b) return "1";
    else return "0";
}

let a1 = +prompt("Enter a");
let b1 = +prompt("Enter b");
console.log( first(a1, b1) );



function fact(a){
    return (a != 1) ? a * fact(a - 1) : 1;
}

let a2 = +prompt("Factorial");
console.log( fact(a2) );



function string(){
    return str = s + "" + t  + "" + r ;
}

let s = +prompt("Enter first digit");
let t = +prompt("Enter second digit");
let r = +prompt("Enter third digit");
console.log( string(s, t, r) );



function time(hour, minute, second){
    strHour = hour.toString()
    strMinute = minute.toString()
    strSecond = second.toString();

    strHour == "0" ? strHour = "00" : strHour = `${hour}`;
    strMinute == "0" ? strMinute = "00" : strMinute = `${minute}`;
    strSecond == "0" ? strSecond = "00" : strSecond = `${second}`;

    strHour.length == 1 ? strHour = "0" + strHour : 0;
    strMinute.length == 1 ? strMinute = "0" + strMinute : 0;
    strSecond.length == 1 ? strSecond = "0" + strSecond : 0;

    console.log("Time: " + strHour + "." + strMinute + "." + strSecond);
    console.log("It`s " + ( (hour * 60 + minute) * 60 + second) + " seconds");
}

let hour = 0
    minute = 0
    second = 0;
do{
    hour = +prompt("Enter hours");
} while( (hour < 0) || (hour > 24) || (isNaN(hour)) );
do{
    minute = +prompt("Enter minutes");
} while( (minute < 0) || (minute > 60) || (isNaN(minute)) );
do{
    second = +prompt("Enter seconds");
} while( (hour < 0) || (hour > 60) || (isNaN(second)) );

time(hour, minute, second);