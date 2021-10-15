function bonusPoints(input){
    let points= Number(input[0])
    let bonus=0.0
    if(points<=100){
        bonus+=5
    }  else if(points>1000){
        bonus+=0.1*points
    } else {
        bonus+=0.2*points
    }
if(points%2==0){
    bonus++
} else if(points%10==5){
    bonus+=2
}
console.log(bonus+"\n")
console.log(bonus+points)
}
