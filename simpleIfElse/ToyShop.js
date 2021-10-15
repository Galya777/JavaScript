// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които
// ще спечели иска да отиде на екскурзия.
// Цени на играчките:
//  Пъзел - 2.60 лв.
//  Говореща кукла - 3 лв.
//  Плюшено мече - 4.10 лв.
//  Миньон - 8.20 лв.
//  Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените
// пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на
// екскурзия.
function toyShop(input){
let price=Number(input[0])
let puzzle=Number(input[1])
let doll=Number(input[2])
let bear=Number(input[3])
let minion=Number(input[4])
let truck=Number(input[5])
let toys= puzzle+doll+bear+minion+truck
let toysPrice= puzzle*2.60+doll*3.0+bear*4.10+minion*8.20+truck*2
if(toys>=50){
toysPrice-=0.25*toysPrice
}
toysPrice-=0.1*toysPrice //rent
let mod=Math.abs(toysPrice-price)
if(toysPrice>=price){
console.log(`Yes! ${ mod.toFixed(2) } lv left.`)
} else{
    console.log(`Not enough money! ${ mod.toFixed(2) } lv needed.`)
}
}