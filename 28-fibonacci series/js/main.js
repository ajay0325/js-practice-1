var num1 = 0;
var num2 = 1;
var nxtnum = 0;
for (let i = 0; i<=10; i++) {
    console.log(num1);
    num1 = num2;
    num2 = nxtnum;
    nxtnum = num1+num2;
}