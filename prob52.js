/*
    52) একটা ক োড লিখ ো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছ োট সংখ্যা বের
        করে দিবে ।
*/

function smallestNumberAmong3(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const gotSmallestNumber = smallestNumberAmong3(112, 34, 87);
console.log(gotSmallestNumber);