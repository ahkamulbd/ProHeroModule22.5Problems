/*
    23) তুমি এতদিন পর্যন্ত যে যে মডেলের ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
    array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
    আউটপুট হিসেবে দেখাও
*/

let mobileUsedSoFar = ['Nokia', 'Symphony', 'Oppo', 'Apple', 'MI', 'Tecno'];

let i = 0;

while (i < mobileUsedSoFar.length) {
    let mobileName = mobileUsedSoFar[i];
    console.log(`${i} - ${mobileName}`);
    i++;
}