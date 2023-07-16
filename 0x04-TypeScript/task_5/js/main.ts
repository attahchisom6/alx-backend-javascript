export interface MajorCredits {
  credits: float;
  brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: float;
  brand: 'MinorCredits';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}

const subject1 = {
  credits: "467.28",
  brand: "MajorCredits",
}

const subject2 = {
  credits: "893.45",
  brand: "MinorCredits",
}

console.log(sumMinorCredits(subject1, subject2));
console.log(sumMajorCredits(subject1, subject2));
