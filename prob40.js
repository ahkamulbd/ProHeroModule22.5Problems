/*
40) এমন একটা ফ্যাংশনা লিখ ো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে । আর সে
    সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে ।
*/

function hourToMinutes(hour) {
    const minutes = hour * 60;

    return minutes;
}

const gotMinutes = hourToMinutes(7);
console.log(gotMinutes);