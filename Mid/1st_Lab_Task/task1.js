console.log("MD AL Amin");

const studentName = "MD. AL AMIN";
const marks = [79, 65, 90, 45, 49];
marks.push(67);
let total = 0;

function calculateTotal(marks) {
    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }
    return total;
}

function calculateAverage(marks) {
    const total = calculateTotal(marks) / marks.length;
    return total;
}

function calculateGrade(avg) {
    if (avg >= 80 && avg <= 90) {
        return `your grade is A+ `;
    } else if (avg >= 70 && avg <= 79) {
        return `your grade is :B+`;

    } else if (avg >= 60 && avg <= 69) {
        return `Your grade is: C+`;
    } else if (avg >= 50 && avg <= 59) {
        return `Your grade is:D+`;
    } else {
        return `Your Grade is: F . Improve your Result `;
    }
}

function checkPassFail(marks) {
    for (let i = 0; i <= marks.length; i++) {
        if (marks[i] < 33) {
            return "Fail";
        }

    }
    return "pass";
}

function findHighestMark(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }
    return highest;
}

function countPassSub(marks) {
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }
    return count;
}
const showResult = (name, total, avg, grade, result) => {
    console.log("Student Result");
    console.log("Student Name:", name);
    console.log("Marks:", marks);
    console.log("Total_Marks:", total);
    console.log("Average:", avg.toFixed(2));
    console.log("Grade:", grade);
    console.log("Result:", result);
};
const totall = calculateTotal(marks);
const avg = calculateAverage(marks);
const grade = calculateGrade(avg);
const result = checkPassFail(marks);
const highestMark = findHighestMark(marks);
const passedsub = countPassSub(marks);
showResult(
    studentName,
    totall,
    avg,
    grade,
    result
);
console.log("Highest Mark:", highestMark);
console.log("passedSub:", passedsub);