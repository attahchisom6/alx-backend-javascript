export interface MajorCredits {

  credits: number;
  brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
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

const subject1: MajorCredits = {
  credits: 467.28,
  brand: "MajorCredits",
}

const subject2: MajorCredits = {
  credits: 893.45,
  brand: "MajorCredits",
}

console.log(sumMajorCredits(subject1, subject2));
