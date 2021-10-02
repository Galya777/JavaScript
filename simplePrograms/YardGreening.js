/*Напишете програма, която изчислява необходимате сума, които Божидара ще трябва да заплати на фирмата
изпълнител на проекта. Цената на един кв. м. е 7.61 лв със ДДС. Понеже нейният двор е доста голям,
фирмата изпълнител предлага 18% отстъпка от крайната цена.*/

function Greening(input){
    let square= Number(input[0])
    let price= square* 7.61
    let offer= price*0.18
    let final = price - offer
    console.log(`The final price is: ${final} lv.`);
        console.log(`The discount is: ${offer} lv.`)
}
Greening(["550"])