/*
    9) You are given a triangle with the sides 9, 8, 9. Write a program to check
    whether a triangle is Isosceles or not using if-else.
    Isosceles => two sides are equal
*/

let triangleSide1 = 9;
let triangleSide2 = 8;
let triangleSide3 = 9;

if (triangleSide1 === triangleSide2 || triangleSide2 === triangleSide3 || triangleSide3 === triangleSide1) {
    console.log(`Triangle is Isosceles`);
}
else {
    console.log(`Triangle is not Isosceles`);
}