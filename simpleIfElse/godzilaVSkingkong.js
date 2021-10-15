// Снимките за дългоочаквания филм &quot;Годзила срещу Конг&quot; започват. Сценаристът Адам Уингард ви моли да
// напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За
// снимките ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
//  Декорът за филма е на стойност 10% от бюджета.
//  При повече от 150 статиста, има отстъпка за облеклото на стойност 10%.
function battle(input){
    let budget=Number(input[0])
    let statists=Number(input[1])
    let clothesPrice=Number(input[2])
    if(statists>150){
        clothesPrice-=0.1*clothesPrice
    }
    let price= budget*0.1 + statists*clothesPrice
    let mod=Math.abs(budget-price)
if(budget>=price){
console.log(`Action! 
    Wingard starts filming with ${mod.toFixed(2)} leva left.`)
} else{
    console.log(`Not enough money! 
        Wingard needs ${mod.toFixed(2)} leva more.`)
}

    }