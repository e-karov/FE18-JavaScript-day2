function calculateAreaAndVolume(width, height, depth) {
    let area = Number(width) * Number(height);
    let volume = area * Number(depth);

    return (`The area of the box is: ${area}\nThe volume of the box is: ${volume}`);
}

console.log(calculateAreaAndVolume(4, 10, 5));