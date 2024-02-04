    // Type of datatype

//  (1) primitive : it have 7 type  , they are use as a call by value
//      (1) String
//      (2) Number
//      (3) Boolearn
//      (4) null
//      (5) undefined
//      (6) Sumbol  -> it is use to make a value unique
//      (7) BigInt

const score = 100
const scoreValue = 100.8
const isLoggedIn = false
const outsideTemp = null
let usearEmail ;
const id = Symbol("123")
const anotherid = Symbol("123")
// console.log(id === anotherid);
const bigNumber = 34343438707032452045024n

//  (2) Reference (Non primitive)  , they are use as a call by reference
//      (1) Array
//      (2) Objects
//      (3) Functions

// Array
const heros = ["Father saabh" , "Mother"];

//Objects
let myObject = {
    FatherName: "Mr RamNiwash",
    MotherName: "Sharda Davi",
}

// Functions
const myFunction = function(){
    console.log("Hello World");
}

//***************************************************************

//  stack (primitive) , Heap (Non Primitive)

let myname = "Nikhil"
let mysarname  = myname
mysarname = "Ruhela"
console.log(myname);
console.log(mysarname);


let userone = {
    Name: "Nikhil",
    email: "nikhil@gmail.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.Name = "Akanksha"
usertwo.email = "Akanksha@gmail.com"
usertwo.upi = "usertwo@ybl"

console.log(userone);
console.log(usertwo);

