/*Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да
напишете функция, която да изчисли колко ще им струва, да си засадят определен брой цветя и дали
наличния бюджет ще им е достатъчен. Различните цветя са с различни цени.

цвете Роза Далия Лале Нарцис Гладиола
Цена на брой в лева 5 3.80 2.80 3 2.50
Съществуват следните отстъпки:
 Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
 Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена
 Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
 Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
 Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
Функцията получава 3 аргумента:
 Вид цветя - текст с възможности - &quot;Roses&quot;, &quot;Dahlias&quot;, &quot;Tulips&quot;,
 &quot;Narcissus&quot;, &quot;Gladiolus&quot;
 Брой цветя - цяло число в интервала [10…1000]
 Бюджет - цяло число в интервала [50…2500]*/

function Home(input){
    let flowers=String(input[0])
    let number=Number(input[1])
    let budget=Number(input[2])
    let price=0
    switch (flowers) {
        case "Rose":
            price=number*5
            if(number>80){
                price-=price*0.1
            }
            break;
            case "Dahlias":
            price=number*3.50
            if(number>90){
                price-=price*0.15
            }
                break;
                case "Tylips":
                    price=number*2.80
                    if(number>80){
                        price-=price*0.15
                    }
                    break;
                    case "Narcissus":
                        price=number*3
                        if(number<120){
                            price+=price*0.15
                        }
                break;   
                case "Gladioulas":
                    price=number*2.50
                    if(number<80){
                        price+=price*0.2
                    }
                    break;       
        default:
            break;
    }
    let a= Math.abs(price-budget)
    if(price>=budget){
        console.log(`Not enough money, you need
        ${a} leva more.`)
    }else{
        console.log(`Hey, you have a great garden
        with ${number} ${flowers} and ${a}
        leva left.`)
    }


}