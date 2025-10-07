// const myArray = [10, 20, 30, 40];
// console.log(myArray);
// myArray[0] = 100;
// console.log(myArray);

// [1, 'hello', true, { name: 'socks' }[1, 2, 3]];
// console.log(typeof [1, 2]);
// console.log(Array.isArray([1, 2]));

// console.log(myArray.length);
// myArray.push(50);
// console.log(myArray);
// myArray.splice(0, 1);
// console.log(myArray);



// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let randomNumber = 0;
// while (randomNumber < 0.5) {
//   randomNumber = Math.random();
//   console.log(randomNumber);
// }

// const todoList = ['Make dinner', 'Wash dishes', 'watch youtube']

// for (let i = 0; i < todoList.length; i++){
//   const value = todoList[i]
//   console.log(value);
// }


// const nums = [1, 1, 3];
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   total += num;

// }
// console.log(total);

// const numsDoubled = [];

// for (let i = 0; i < nums.length; i++){
//   const num = nums[i];
//   numsDoubled.push(num * 2);
// }
// console.log(numsDoubled)

const array1 = [1, 2, 3];
const array2 = array1.slice(); //creates a copy of array1
array2.push(4);
console.log(array1);
console.log(array2);

const [firstValue, secondValue] = [1, 2, 3]; //destructuring
console.log(firstValue);


for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) { continue; } //skips the value of 3 and 6 because they are divisible by 3, does not skip 9 because loops stops at 8
    console.log(i);
    if (i === 8) {
        break;  //stops the loop when i is 8
    }
}


let i = 1;
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue; //skips 3, 6 and 9, in a while loop you have to increment i before continue otherwise it will be an infinite loop
    }
    console.log(i);
    i++;
}


function doubleArray(nums) {
    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            return numsDoubled;
        } //stops the loop if num is 0
        numsDoubled.push(num * 2);
    }
    return numsDoubled
}
console.log(doubleArray([1, 2, 3]));
console.log(doubleArray([6, 7, 8, 4, 0],));