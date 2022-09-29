/*
37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ]
    as the input parameter and will return the sum of the odd numbers.
*/

const array = [5, 7, 8, 10, 30, 31, 37, 40, 45];

function findOddSum(numbers) {
    const oddNumbers = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number % 2 != 0) {
            oddNumbers.push(number);
            sum = sum + number;
        }
    }
    return sum;
}
const oddNumbersSum = findOddSum(array);
console.log(oddNumbersSum);