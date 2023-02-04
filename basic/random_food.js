let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
    
    let favorite = Math.floor(Math.random() * favoriteFoods.length);

    console.log(favoriteFoods[favorite]);

}

randomFood(favoriteFoods);