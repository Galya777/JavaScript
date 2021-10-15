// По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата задача е да
// напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода. По време на
// почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка, а
// времето за отдих ще бъде 1/4 от времето за почивка.
function lunchBreak(input){
    let serial=String(input[0])
    let episode=Number(input[1])
    let lbreak=Number(input[2])

    let time= lbreak-(lbreak*1/8 + lbreak*1/4)
    let mode=Math.abs(episode-time)
    
    if(time>=episode){
     console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(mode)} minutes free time.`)
    } else{
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(mode)} more minutes.`)
    }

}