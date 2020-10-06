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



let yourVariableName = 'test';
const myConstantyVariable = 'this cant change';

myConstantyVariable = 'im changing this'; // not allowed
yourVariableName = 'im changing this and its okay';

let x = 5; 
let y = '5';

x == y; // true
x === y; // false

const dogs = ['Blart', 'Lola', 'Ben'];
for (let i = 0; i < dogs.length; i++) {
    console.log(i);
}

dogs.forEach(function(item) {
    console.log(item);
});

let stringInterpolation = `${x} ${y}`;

let colbysCar = {
    make: 'Honda',
    model: 'Civic',
    year: 2006,
    name: 'Bessie',
    color: 'Silver',
    datePurchased: new Date("6/1/2018"),
    statesVisited: ['Vermont', 'New Hampshire', 'Massachussets']
};

colbysCar.statesVisited.forEach(function(state) {

});

for (let i = 0; i < colbysCar.statesVisited.length; i++) {
    let state = colbysCar.statesVisited[i];
    console.log(state);
}

colbysCar.statesVisited.forEach(state => console.log(state));

let cookies = {
    flour: '1 cup',
};

function cookies(flour, eggs, sugar, chocolate) {
    
    // bowl
    // butter, sugars, egg, vanilla
    let sugarMix = eggs + sugar;

    // flour, oats, chocolate, baking soda
    let dryMix = flour + chocolate;

    // mix all together
    let everything = dryMix + sugarMix;
    // put in oven, some other function defined somewhere else
    let bakedCookies = bakeInOven();
    
    // cookies!!
    return bakedCookies;
}

let numberOfCookies = cookies('1 cup', '1', '1/2 cup', '1/2 cup');




const myName = 'Chris';
let yourName = 'Tak';

let realNumber = 5;
let stringNumber = '5';

realNumber == stringNumber; // True
realNumber === stringNumber; // False

let dogs = ['Luna', 'Barron', 'Milo', 'Cabot', 'Kasey'];

for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    console.log(dog);
}

dogs.forEach((dog) => {
    console.log(dog)
});

dogs.forEach(function(dog) {
    console.log(dog);
});

const gabesCar = {
    model: 'Legacy',
    make: 'Subary',
    year: 2001,
    statesVisited: ['Delaware', 'Vermont', 'Massachussets'],
    boughtInState: {
        name: 'Montana',
        county: 'Bumfuck'
    }
};

for (let i = 0; i < gabesCar.statesVisited.length; i++) {
    console.log(gabesCar.statesVisited[i]);
}

gabesCar.statesVisited.forEach(state => {
    console.log(state);
});

gabesCar.statesVisited.forEach(function(state) {
    console.log(state);
});

function squareNumber(numberToSquare) {
    return numberToSquare * numberToSquare;
}

const coolSquareNumber = numberToSquare => numberToSquare * numberToSquare;

let squared = squareNumber(5);
let squared = coolSquareNumber(25);

function sum(value1, value2) {
    return value1 + value2;
}

const coolSum = (value1, value2) => {
    return value1 + value2
}

const thirteen = sum(5, 8);

