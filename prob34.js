/*
34) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার
    square করে সে ই square কে রি টার্ন করবে । অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে ।
*/

function returnSquareOutput(number, exponent) {
    let squareNumber = Math.pow(number, exponent);

    return squareNumber;
}

const result = returnSquareOutput(5, 2);
console.log(result);