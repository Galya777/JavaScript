/*За лятната ваканция в списъка със задължителна литература на Жоро има определен брой книги. Понеже
Жоро предпочита да играе с приятели навън, вашата задача е да му помогнете да изчисли колко часа на ден
трябва да отделя, за да прочете необходимата литература.*/
function pages(input){
    let pages= Number(input[0])
    let pagesPerHour=Number(input[1])
    let days= Number(input[2])
let pagesPerDay=(pages/pagesPerHour)/days
console.log(pagesPerDay)
}
