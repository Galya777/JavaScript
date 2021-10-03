/*Напишете програма, която изчислява каква сума ще получите в края на депозитния период при определен
лихвен процент. Използвайте следната формула:
сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)*/

function deposit(input){
    let sum= Number(input[0])
    let duration=Number(input[1])
    let percent= Number(input[2])
    let final= sum+duration*((sum*percent/100)/12)
    console.log(final)
}