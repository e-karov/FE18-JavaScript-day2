function showWeather() {
    let minNumber = -5;
    let maxNumber = 25;

    let temperature = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) ;
    let output = "";

    if (temperature <= 10) {
        output = "The weather is cold."
    } else {
        output = "The weather is moderate."
    }
    console.log("Temperature: ", temperature + "C°"); ;
    return output;
};

console.log(showWeather());