const accountId = 144553
let accountEmail = "punit.nita@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //not a good way but yes it is possible
let accountState;
// accountId = 2 // not allowed
accountEmail = "punit@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);