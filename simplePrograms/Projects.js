/*Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви
проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.*/

function Project(input){
    let name= input[0]
    let projects= Number(input[1])
    let hours= projects*3
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}
