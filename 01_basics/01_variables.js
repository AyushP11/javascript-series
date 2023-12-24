const accountId = 2545189
let accountEmail = "ayush@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai" // this will not give error
let accountState; // variable is declared but undefined

// accountId = 2 // not allowed

accountEmail = "ayush@github.com"
accountPassword = "9999"
accountCity = "Bengaluru"

console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])