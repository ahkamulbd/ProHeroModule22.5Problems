/*
45) একইভাবে উল্টা হিসাব করবে । যাতে ত োমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে
    সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে ।
*/

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    const toFixedCelsius = celsius.toFixed(2);

    return toFixedCelsius;
}

const gotCelsius = fahrenheitToCelsius(90);
console.log(gotCelsius);