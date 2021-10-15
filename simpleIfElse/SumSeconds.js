function sumSeconds(input){
    let first =Number(input[0])
    let seccond= Number(input[1])
    let third = Number(input[2])
    let total= first+seccond+ third
    let minutes=Math.floor(total/60)
    let seconds= total%60
    if(seconds<10){
console.log(minutes+":0"+seconds)
    }else{
    console.log(minutes+":"+seconds)
    }
}