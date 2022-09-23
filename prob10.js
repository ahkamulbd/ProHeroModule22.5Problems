/*
    10) ক্লাস সে ভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়ে ছ। ত োমার বন্ধুআলি য়া, ডালি য়া,
    সালি য়া, মালি য়া, লি লি য়া আর জ্বালাইয়া - তাদে র grade তুমি জান ো না। তবে তাদে র নম্বর
    জান ো. আলি য়া 95 পে য়ে ছে , ডালি য়া 66 পে য়ে ছে , সালি য়া 80 পে য়ে ছে , মালি য়া পে য়ে ছে 59,
    লি লি য়া পে য়ে ছে 47, জ্বালাইয়া পে য়ে ছে 77। তুমি JS code দি য়ে তাদে র grade বে র করে
    দি তে পারবে ?
    ১) যারা ৫০ এর নি চে পে য়ে ছে , তাদে র grade F.
    ২) যারা ৫০ বা তার উপরে পে য়ে ছে , অথবা ৬০ এর নি চে পে য়ে ছে , তাদে র grade D.
    ৩) যারা ৬০ বা তার উপরে পে য়ে ছে , অথবা ৭০ এর নি চে পে য়ে ছে , তাদে র grade C.
    ৪) যারা ৭০ বা তার উপরে পে য়ে ছে , অথবা ৮০ এর নি চে পে য়ে ছে , তাদে র grade B.
    ৫) যারা ৮০ বা তার উপরে পে য়ে ছে , অথবা ৯০ এর নি চে পে য়ে ছে , তাদে র grade A.
    ৬) যারা ৯০ বা তার উপরে পে য়ে ছে , তাদে র grade A+.
*/

function gradeMarks(marks) {
    if (marks > 100 || marks < 0) {
        console.log('Invalid Marks');
    }
    else if (marks >= 90 && marks <= 100) {
        console.log('Grade A+');
    }
    else if (marks >= 80 && marks < 90) {
        console.log('Grade A');
    }
    else if (marks >= 70 && marks < 80) {
        console.log('Grade B');
    }
    else if (marks >= 60 && marks < 70) {
        console.log('Grade C');
    }
    else if (marks >= 50 && marks < 60) {
        console.log('Grade D');
    }
    else {
        console.log('Grade F')
    }
}

const AliaScore = gradeMarks(95);
const DaliaScore = gradeMarks(66);
const SaliaScore = gradeMarks(80);
const MaliaScore = gradeMarks(59);
const LiliaScore = gradeMarks(47);
const JalaiaScore = gradeMarks(77);
const InvalidScore = gradeMarks(185);
//console.log(myScore);