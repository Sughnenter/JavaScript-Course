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

// [
//     'make dinner',
//     'wash dishes',
//     'take out trash',
// ].forEach((value, index) => {
//     console.log(index);
//     console.log(value);
// })
// const regularFunction = function (param, param2) {
//     console.log('hello')
//     return 5
// }
// regularFunction()
// const arrowFunction = (param, param2) => {
//     console.log('hello');
//     return 5
// }
// arrowFunction()

// const oneParam = param => {
//     console.log(param + 1);
// }
// oneParam(2)


// const oneLine = () => 2 + 3;
// console.log(oneLine())


// const objectc2 ={
//     method:()=>{},
//     method(){}
// }

const buttonElement = document.querySelector('.js-click-button');

const eventListener = () => { console.log('click') };
buttonElement.addEventListener('click', eventListener);
buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => { console.log('click2') });