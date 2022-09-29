/*
    31) একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে ।
*/

function timesSeries(x) {
    let multiplication = 1;
    for (let i = 1; i <= 10; i++) {
        multiplication = x * i;
        console.log(`${x} X ${i} = ${multiplication}`);
    }

}
let result = timesSeries(13);
