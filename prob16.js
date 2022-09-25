/*
    16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
    কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
    ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে ।

*/

//let myMoney = 50000;

// function myMoney(money) {
//     if (money > 80000) {
//         console.log('I will buy Mac');
//     }
//     else if (money > 60000) {
//         console.log('I will buy Gaming Laptop');
//     }
//     else if (money > 40000) {
//         console.log('I will buy Lenovo Yoga');
//     }
//     else if (money > 20000) {
//         console.log('I will buy Normal Laptop');
//     }
//     else {
//         console.log('I will continue work with my old mobile');
//     }
// }

// const budgetMoney = myMoney(50000);
// //console.log(budgetMoney);

// Solving with return

function myMoney(money) {
    if (money > 80000) {
        return Mac;
    }
    else if (money > 60000) {
        return GamingLaptop;
    }
    else if (money > 40000) {
        return LenovoYoga;
    }
    else if (money > 20000) {
        return NormalLaptop;
    }
    else {
        return myOldMobile;
    }
}

const budgetMoney = myMoney(50000);
console.log(budgetMoney);               // Remarks: Code not working

