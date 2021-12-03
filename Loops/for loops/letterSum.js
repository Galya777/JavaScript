function powerOf2(input){
    let n= String(input)
    let sum=0
for(let i=1; i<n.length;i++){
let letter=n[i]
switch (letter) {
    case 'a':
        sum+=1
        break;
        case 'e':
            sum+=2
            break;
            case 'i':
                sum+=3
                break;
                case 'o':
                    sum+=4
                    break;
                    case 'u':
                        sum+=5
                        break;
 
}
}
console.log(sum)
}