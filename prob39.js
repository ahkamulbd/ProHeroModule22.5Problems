/*
39) ত োমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে । সেই
    ফাংশনকে ক োন সংখ্যা প্যারামিটার হিসেবে দিলে , সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে ।
*/

function checkAge(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myAge = 46;
const checkMyAge = checkAge(myAge);
console.log(checkMyAge);