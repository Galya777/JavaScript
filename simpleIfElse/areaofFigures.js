function FigArea(input){
    let type=String(input[0])
    let square=0;
    if(type==="square"){
let a= Number(input[1])
square=a*a
    } else if(type==="rectangle"){
        let a= Number(input[1])
        let b= Number(input[2])
     square=a*b

    } else if(type==="circle"){
        let a= Number(input[1])
        square=(a*a)*Math.PI

    } else if(type==="triangle"){
        let a= Number(input[1])
        let b= Number(input[2])
     square= (a*b)/2
    } 
    console.log(square.toFixed(3))
}