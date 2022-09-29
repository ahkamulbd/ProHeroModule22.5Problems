/*
    49) Write a function and take an array as a parameter. Find the average of all
        the elements of that array and return this average.
*/

const array = [45, 23, 89, 23, 12, 97, 13, 7];

function findArrayElementsAverage(elements) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const sum1 = sum + element;
        const average = sum1 / elements.length;
    }

    return average;
}

const gotAverage = findArrayElementsAverage(array);
console.log(gotAverage);