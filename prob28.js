/*
    28) Challenging: Write a function called make_avg() which will take an array of
        integers and the size of that array and return the average of those values.
*/

const arrayInt = [2, 3, 54, 34, 6, 78, 3, 43, 1, 0, 43, 3, 5, 6];

function make_avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i];
        sum = sum + arrayElement;
        let arrayElementAverage = sum / array.length;
    }
    return arrayElementAverage;
}

const average = make_avg(arrayInt);
console.log(average);

//console.log(make_avg(arrayInt));