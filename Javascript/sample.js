let blahblah = 12345;

const myAge = 18;
const isOld = true;
const isDriving = true;

if (myAge >= 21 && isDriving) {
    console.log("Cant drink");
} else if (myAge >= 21 && !isDriving) {
    console.log ("Can drink");
}

if (myAge >= 21) {
    console.log('You can buy alcohol');
} else if (myAge === 18) {
    console.log("You can buy alcohol in europe");
} else {
    console.log("tough shit");
}


let greeting = "hello world";
greeting = "goodbye world";

a = "goodbye world";

// array
let coolStuff = [1, "Chris", true, 50, "types"];

// object
let zachObject = {
    age: 19,
    name: "zach",
    favoriteGames: ["CSGO", "COD", "Japanese dating sims"]
}
// Game Object
// name:
// releaseYear: 
// multiplayer: 

let zachObject = {
    age: 19,
    name: "zach",
    favoriteGames: [
        // Multiple game objects inside the array
        {
            name: "CSGO",
            releaseYear: 2012,
            multiplayer: true
        },
        {
            name: "COD",
            releaseYear: 2000,
            multiplayer: true
        }
    ]
}

let zachsAge = zachObject.age;


if (zachObject.age >= 21) {
    console.log("Buy beer");
} else if (zachObject.age == 20) {
    console.log('try again next year');
} else {
    console.log("too young");
}

zachObject.favoriteGames.filter(game => {
    return game.releaseYear >= 2010;
});



let ken = {
    name: "Ken",
    age: 21,
    favoriteGames: [
        {
            name: "Fifa",
            platforms: ["xbox", "ps"],
            year: "Literaly every year",
            multiplayer: true
        },
        {
            name: "Solitaire",
            platforms: ["physical cards"],
            year: "who knows",
            multiplayer: false
        }
    ],
    hometown: {
        name: "Portland",
        state: {
            name: "Connecticut",
            abbreviation: "CT",
            nicknames: ['Cool state', "bad state"]
        }
    }
}

let kensState = ken.hometown.state.name;

let kensName = ken.name;
let kensAge = ken.age;

ken.favoriteGames.forEach(game => {
    game.name;
    game.multiplayer;
    game.platforms;
});