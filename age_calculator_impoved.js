function ageCalculator(birthYear) {
    let currentYear = new Date().getFullYear();

    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;


    return `You are either ${age1} or ${age2}`;
}

console.log(ageCalculator(2000));