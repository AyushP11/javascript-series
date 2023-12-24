// if
const isUserloggedIn = true
const temperature = 41

if ( temperature < 40 ){
    console.log("less than 40");
} else {
    console.log("temperature is greater than 40");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // gives error because 'power' variable is declared in 'if' clause scope


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); // both log will be exectued

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("greater than 900");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}