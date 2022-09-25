/*
    11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফিক  সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডেঞ্জার হতে পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে ত োমার রাস্তা পার হওয়া উচিত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা signal নামে একটা ভেরিয়েবল থাকবে । সে টার মান green, yellow বা red হতে পারে ।
    সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো।
*/

//let signal = 'red';

function trafficSignal(signal) {
    if (signal === 'red') {
        console.log('stop');
    }
    else if (signal === 'yellow') {
        console.log('Wait');
    }
    else if (signal === 'green') {
        console.log('Cross');
    }
    else {
        console.log('Invalid Traffic Signal');
    }
}

trafficSignal('red');
trafficSignal('orange');
trafficSignal('yellow');
trafficSignal('green');
