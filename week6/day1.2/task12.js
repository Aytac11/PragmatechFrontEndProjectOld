// Ad gününüzə neçə gün qalıb? bunu tapmaq üçün proqram yazmaq (JS Date)

const date = new Date();

const birthday = 3;
const birthmonth = 3;
const birthyear = 2021;

const currentDay = date.getDate();
const currentMonth = date.getMonth()+1;
const currentYear = date.getFullYear();


let resultday = (currentDay-birthday);
if(resultday<0){
    resultday = Math.abs(resultday);
} 

let resultmonth = currentMonth-birthmonth;
if(resultmonth<0){
    resultmonth = Math.abs(resultmonth);
} 

let resultyear = currentYear-birthyear;
if(resultyear<0){
    resultyear= Math.abs(resultyear);
} 

let result =resultyear*365-(resultday + resultmonth*31);

console.log(result)