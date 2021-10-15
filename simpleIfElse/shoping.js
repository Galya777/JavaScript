// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям
// от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:

//  Видеокарта – 250 лв./бр.
//  Процесор – 35% от цената на закупените видеокарти/бр.
//  Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
function shopping(input){
    let budget=Number(input[0])
    let video=Number(input[1])
    let cpu=Number(input[2])
    let ram=Number(input[3])

    let videoP=video*250
    let cpuP= 0.35*videoP
    let ramP=0.1*videoP
    let total= videoP+ cpu*cpuP+ ram* ramP
    if(video>cpu){
        total-=0.15*total
    }
    let mod= Math.abs(total-budget)
if(budget>=total){
console.log(`You have ${mod.toFixed(2)} leva left!`)
} else{
    console.log(`Not enough money! You need ${mod.toFixed(2)} leva more!`)
}

}