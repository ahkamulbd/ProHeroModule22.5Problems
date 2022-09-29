/*
46) কে উ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা ত োমাকে বলে দিবে । তুমি একটা ফাংশন দিয়ে বলে
দিবে সে এ+ পাবে নাকি অন্য ক োন গ্রেড পাবে ।
*/

function gotMarks(marks) {
    if (marks < 0 || marks > 100) {
        console.log('Invalid Marks');
    }
    else if (marks >= 90 && marks <= 100) {
        console.log('Grade A+');
    }
    else if (marks >= 80 && marks < 90) {
        console.log('Grade A');
    }
    else if (marks >= 70 && marks < 80) {
        console.log('Grade A-');
    }
    else if (marks >= 60 && marks < 70) {
        console.log('Grade B');
    }
    else if (marks >= 50 && marks < 60) {
        console.log('Grade C');
    }
    else if (marks >= 40 && marks < 50) {
        console.log('Grade D');
    }
    else {
        console.log('Grade F');
    }
}

const AbdulKarimMarks = gotMarks(82);