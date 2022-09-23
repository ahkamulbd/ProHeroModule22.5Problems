/*
    7) You and your friends Tom, Jane, Peter and John got their final exam
    results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
    95, Peter’s total score is 56 and John’s total score is 40. The grading
    chart is
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
    Write a program to find your and your friends’ grades using
    if-else.
*/

function gradeMarks(marks) {
    if (marks > 100 || marks < 0) {
        console.log('Invalid Marks');
    }
    else if (marks >= 80 && marks <= 100) {
        console.log('Grade A');
    }
    else if (marks >= 60 && marks < 80) {
        console.log('Grade B');
    }
    else if (marks >= 50 && marks < 60) {
        console.log('Grade C');
    }
    else if (marks >= 40 && marks < 50) {
        console.log('Grade D');
    }
    else {
        console.log('Grade F')
    }
}

const myScore = gradeMarks(85);
const TomScore = gradeMarks(66);
const JanScore = gradeMarks(95);
const PeterScore = gradeMarks(56);
const JohnScore = gradeMarks(40);
const InvalidScore = gradeMarks(185);
//console.log(myScore);
