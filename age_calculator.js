function ageCalculator(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;

    console.log(`You are either ${age1} or ${age2}`);
}

ageCalculator(2000, 2023);