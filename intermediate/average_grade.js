function calcGrades(math, physics, english){
    let sum = Number(math) + Number(physics) + Number(english);
    let average = sum / 3;

    return `Sum: ${sum}\nAverage: ${average}`;
}

console.log(calcGrades(1, 3, 2));