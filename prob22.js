/*
    22) তুমি এতদি ন যা যা জি নি স শি খছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা
    for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও।
*/

let learntTopics = ['html', 'css', 'git', 'javaScript', 'bootstrap', 'tailwind', 'DOM', 'API'];

for (let i = 0; i < learntTopics.length; i++) {
    let learntTopic = learntTopics[i];
    console.log(`${i} - ${learntTopic}`);
}