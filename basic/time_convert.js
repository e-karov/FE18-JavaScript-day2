function convertMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainderMins = minutes % 60;

    return `${minutes} minutes = ${hours} hour(s) and ${remainderMins} minute(s).`;
}

console.log(convertMinutes(621));