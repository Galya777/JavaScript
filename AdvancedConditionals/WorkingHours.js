function workingHours(input) {
    let date=Number(input[0])
    let day=String(input[1])
if(day!="Sunday"){
    if(date>=10&&date<=18){
        console.log("open")
    } else{
        console.log("closed")
    }
} else{
    console.log("closed")
}
}