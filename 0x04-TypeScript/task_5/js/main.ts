interface MajorCredits{
    credits: number;
    brand: "MajorCredits";
}
interface MinorCredits{
    credits: number;
    brand: "MinorCredits";
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits) {
    return subject1.credits + subject2.credits;
}
export function sumMinorCredits(subject1: MinorCredits, subject2: MajorCredits) {
    return subject1.credits + subject2.credits;
}