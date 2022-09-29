/*
44) ত োমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে । তুমি ক্যালকুলেশন করে তাপমাত্রা
    ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করব
*/

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

const gotFahrenheit = celsiusToFahrenheit(30);
console.log(gotFahrenheit);