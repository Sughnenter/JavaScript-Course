// function greeting() {
//     console.log("Hello World");
// }
// greeting();
// const num = 2;
// const function1 = function greeting() {
//     console.log("Hello World2");
// };

// console.log(function1); //prints the function definition
// console.log(typeof function1); //prints function type
// function1(); //calls the function


// const object1 = { num: 2, fun: function greeting() { console.log("Hello World3") } };
// object1.fun(); //calls the function inside the object

// setTimeout(function () {
//     console.log("Timeout");
//     console.log("Timeout2");
// }, 3000); //calls the function after 3 seconds the second parrameter is the time in milliseconds
// console.log("Next line");


// setInterval(function () {
//     console.log("Interval");
// }, 3000); //calls the function every 3 seconds the second parrameter is the time in milliseconds

[
    'make dinner',
    'wash dishes',
    'take out trash',
].forEach(function (value, index) {
    console.log(index);
    console.log(value);
})