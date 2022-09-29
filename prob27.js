/*
    27) Write a function called make_avg() which will take an three integers and
    return the average of those values.
*/

function make_avg(int1, int2, int3) {
    let integersSum = int1 + int2 + int3;
    let integersAverage = integersSum / 3;
    return integersAverage;
}

const result = make_avg(40, 30, 80);
console.log(result);