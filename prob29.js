/*
    29) Write a function called odd_even() which takes an integer value and tells
        whether this value is even or odd. You need to do it in 4 ways:
            ● Has return + Has parameter
            ● No return + Has parameter
*/

// // Has return + Has parameter

// function odd_even(integer) {
//     if (integer % 2 != 0) {
//         return 'Odd';
//     }
//     else {
//         return 'Even';
//     }
// }
// const result = odd_even(10);
// console.log(result);

// No return + Has parameter

function odd_even(integer) {
    if (integer % 2 != 0) {
        console.log('Odd');
    }
    else {
        console.log('Even');
    }
}
const result = odd_even(101);
