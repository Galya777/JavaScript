/*Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). Използвайте фиксиран
курс между долар и лев: 1 USD = 1.79549 BGN.*/
function converte(input){
    let dolar=Number(input[0])
    let lev=dolar* 1.79549
    console.log(lev)
}