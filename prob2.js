/* 
    2) Write a program to calculate the average marks of Mathematics,
    Biology, Chemistry, Physics, and Bangla of a student.
*/
let markMathematics = 81;
let markBiology = 87;
let markChemistry = 93;
let markPhysics = 98;
let markBangla = 85;

let totalMark = markMathematics + markBiology + markChemistry + markPhysics + markBangla;
let averageMark = totalMark / 5;

console.log(parseFloat(averageMark.toFixed(2)));
