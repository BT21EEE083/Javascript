let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString);
// console.log(mydate.toUTCString());

// console.log(typeof mydate);

let mycreatedDate = new Date("2024-01-13")  // if we use this'-' then months are start from 1 other wise months are start fron zero
// console.log(mycreatedDate.toDateString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());
console.log(Math.floor((Date.now())/1000));


let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getDate())
// console.log(newDate.getMonth() +1)

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}))


