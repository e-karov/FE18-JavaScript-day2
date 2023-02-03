function crystalGazer(children, partnersName, location, job) {
    let message = `You will be a ${job} in ${location} and married to ${partnersName} with ${children} children.`

    return message;
}

console.log(crystalGazer(2, "Wilma Flintstone", "Stone City", "Crane Operator"));