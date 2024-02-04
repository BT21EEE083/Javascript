const account_id = 12345
let account_Email = "nikhil@gmail.com"
var account_Password = "12345"
accountCity = "Jaipur"
let account_state
/*
prefer not to use var because of issue in block scope ({}) , me alwiys use let and for constant we use const
 */
// account_id = 3222   not allowed, constant keyword dont allow to change variables
account_Email = "ruhelanikhil@gmail.com"
account_Password= "54321"
accountCity = "Sikar"

console.log(account_id);
console.log(account_Email);
console.log(account_Password);
console.log(accountCity);
console.log(account_state)
console.table([account_id , account_Email , account_Password , accountCity,account_state])  // it will give every thing in a table
