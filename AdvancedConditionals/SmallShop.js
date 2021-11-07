/*магазинчета в няколко града и продава на различни цени според
града:
град / продукт coffee water beer sweets peanuts
Sofia 0.50 0.80 1.20 1.45 1.60
Plovdiv 0.40 0.70 1.15 1.30 1.50
Varna 0.45 0.70 1.10 1.35 1.55
Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и
отпечатва колко струва съответното количество от избрания продукт в посочения град.*/
function smallShop(input) {
    let product=String(input[0])
    let town=String(input[1])
    let number=Number(input[2])
    let price=0.0
    if(town=="Sofia"){
    switch (product) {
    case "coffee":
        price=number*0.5
        break;
        case "water":
            price=number*0.8
            break;
            case "beer":
                price=number*1.2
                break;
                case "sweets":
                    price=number*1.45
                    break;
                    case "peanuts":
                        price=number*1.6
                        break;
}
    } else if(town=="Plovdiv"){
        switch (product) {
            case "coffee":
                price=number*0.4
                break;
                case "water":
                    price=number*0.7
                    break;
                    case "beer":
                        price=number*1.15
                        break;
                        case "sweets":
                            price=number*1.30
                            break;
                            case "peanuts":
                                price=number*1.5
                                break;
        }
    } else if(town=="Varna"){
        switch (product) {
            case "coffee":
                price=number*0.45
                break;
                case "water":
                    price=number*0.7
                    break;
                    case "beer":
                        price=number*1.1
                        break;
                        case "sweets":
                            price=number*1.35
                            break;
                            case "peanuts":
                                price=number*1.55
                                break;
        }
    }
    console.log(price)
}