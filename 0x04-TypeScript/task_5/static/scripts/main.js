"use strict";
exports.__esModule = true;
exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
var subject1 = {
    credits: "467.28",
    brand: "MajorCredits"
};
var subject2 = {
    credits: "893.45",
    brand: "MinorCredits"
};
console.log(sumMinorCredits(subject1, subject2));
console.log(sumMajorCredits(subject1, subject2));
