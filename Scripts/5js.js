const car = {
    manufacturer: 'Honda',
    model: 'Civic',
    year: 1992,
    speed: 90
};

(function showCar() {
    console.log(car.manufacturer + ' ' + car.model + ' ' + car.year + '\nAverage speed: ' + car.speed + 'km/h');
}());


(function result() {
    const way = +prompt('Enter length of your trip in "km" (digit)');

    let time = way / car.speed;
    const rest = time > 4 ? parseInt(time / 4) : 0;

    console.log('Time for trip: ' + (+rest + +time.toFixed(1)) + ' hour(s)\n\n\n');
}());


/******************************************************************************************************************************/


const time = {
    hours: '00',
    minutes: '00',
    seconds: '00'
};


const currDate = new Date();
time.hours = currDate.getHours();
time.minutes = currDate.getMinutes();
time.seconds = currDate.getSeconds();


(function setSeconds(){
    time.seconds += 2500;

    time.minutes += time.seconds > 59 ? parseInt(time.seconds / 60) : time.minutes;
    time.seconds = time.seconds % 60;
}());

(function setMinutes(){
    time.minutes += 25;

    time.hours += time.minutes > 59 ? parseInt(time.minutes / 60) : time.hours;
    time.minutes = time.minutes % 60;
}());

(function setHours(){
    time.hours += 5;
}());


(function getTime() {
    time.hours = time.hours.toString().length == 1 ? '0' + time.hours.toString() : time.hours.toString();
    time.minutes = time.minutes.toString().length == 1 ? '0' + time.minutes.toString() : time.minutes.toString();
    time.seconds = time.seconds.toString().length == 1 ? '0' + time.seconds.toString() : time.seconds.toString();

    console.log(time.hours, ':', time.minutes, ':', time.seconds);
}());