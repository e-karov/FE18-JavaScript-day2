(function (str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let result = firstLetter + str.slice(1);
    console.log(result);
    
})('I am a web developer');

