var num = 123;
var sum = 0;
var rem = 0;
while (num>0) {
    
    rem = num%10;
    sum = sum + rem;
    num = (num-rem)/10
}
console.log(sum);