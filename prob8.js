/*
    8) You are given three numbers 13, 79, and 45. Write a program that will
    print the largest number using if-else.
*/
let num1 = 13;
let num2 = 79;
let num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(`Largest Number is ${num1}`);
}
else if (num2 > num1 && num2 > num3) {
    console.log(`Largest Number is ${num2}`);
}
else {
    console.log(`Largest Number is ${num3}`)
}