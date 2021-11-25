/*Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция, която спрямо
времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел има
различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от
таблицата.
Функцията получава два аргумента:
 Градусите - цяло число в интервала [10…42]
 Текст, време от денонощието - с възможности - &quot;Morning&quot;, &quot;Afternoon&quot;, &quot;Evening&quot;
Време от
денонощието /
градуси

Morning Afternoon Evening

10 &lt;= градуси &lt;= 18 Outfit = Sweatshirt
Shoes = Sneakers

Outfit = Shirt
Shoes = Moccasins

Outfit = Shirt
Shoes = Moccasins

18 &lt; градуси &lt;= 24 Outfit = Shirt
Shoes = Moccasins

Outfit = T-Shirt
Shoes = Sandals

Outfit = Shirt
Shoes = Moccasins

градуси &gt;= 25 Outfit = T-Shirt
Shoes = Sandals

Outfit = Swim Suit
Shoes = Barefoot

Outfit = Shirt
Shoes = Moccasins
Да се отпечата на конзолата на един ред: &quot;It&#39;s {градуси} degrees, get your {облекло} and
{обувки}.&quot;*/
function SummerClother(input) {
    let degrees=Number(input[0])
    let timeOfDay=String(input[1])
    let outfit;
    let shoes;
    if(degrees>=10&&degrees<=18){
        if(timeOfDay=="Morning"){
            outfit="Swieashirt";
            shoes="Sneakers"
        } else if(timeOfDay=="Afternoon"||timeOfDay=="Evening"){
outfit="Shirt"
shoes="Moccasins"
        }
    }
console.log(`It is a ${degree} degrees, get your ${outfit} and ${shoes}`)
}