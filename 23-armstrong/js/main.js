var num =153;
let lastDigit;

let x = 0;

var temp = num;

function numLength(x){
    let l = 0;
    while(x!=0){
        let ld = x%10;
        l = l + 1
        x = (x - ld) / 10
    }
    return l;
}

l = numLength(num);

console.log(l)





while (temp!=0) {
    lastDigit = temp%10;
    x = x + lastDigit**p;
    temp = (temp - lastDigit) / 10;
}

if (x==num) {
    
    console.log("armstrong number");

} else {
    
    console.log("not a armstrong number");

}