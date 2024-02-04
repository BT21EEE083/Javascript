const name = "Nikhil "
const sarname = "Ruhela "

// console.log(name + sarname + "JAAT");

// console.log(`Hello My Name is ${name} and my sarname is ${sarname} `); 

const gamename = String("nikhil-ruhela-jaat")

// console.log(gamename[2]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));
// console.log(gamename.indexOf("i"));

const newString = gamename.substring(2,5)
 console.log(newString);

 const anotherString = gamename.slice(-5 , 6)
 console.log(anotherString);

 const newStringOne = "    Nikhil   jaat    "
 console.log(newStringOne); 
console.log(newStringOne.trim());

const url = "https://nikhil.com/nikhil%99jaat"
console.log(url.replace("%99" , "_"))
console.log(url.includes("nikhil"));
console.log(gamename.split("-"));