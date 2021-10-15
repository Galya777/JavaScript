// Иван решава да подобри Световния рекорд по плуване на дълги разстояния. Функцията получава: рекордът
// в секунди, който Иван трябва да подобри, разстоянието в метри, което трябва да преплува и времето в
// секунди, за което плува разстояние от 1 м. Да се напише функция, която изчислява дали се е справил със
// задачата, като се има предвид, че: съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди.
// Когато се изчислява колко пъти Иванчо ще се забави, в резултат на съпротивлението на водата, резултатът
// трябва да се закръгли надолу до най-близкото цяло число.
// Да се изчисли времето в секунди, за което Иванчо ще преплува разстоянието и разликата спрямо
// Световния рекорд.
function swimmingRecord(input){
    let recrd=Number(input[0])
    let distance=Number(input[1])
    let time=Number(input[2])
    let hisTime=distance*time
    let slowing=Math.floor(distance/15)*12.5
      hisTime+=slowing
    let mod=hisTime-recrd
    if(recrd>hisTime){
     console.log(`Yes, he succeeded! The new world record is ${hisTime.toFixed(2)} seconds.`)
    } else{
        console.log(`No, he failed! He was ${mod.toFixed(2)} seconds slower.`)
    }

}
swimmingRecord([55555.67,
    3017,
    5.03])