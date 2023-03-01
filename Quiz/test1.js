//1
let x = "Hello";
let y = "World!";

console.log(x + y);

//2
let x = 5;
let y = x++;
console.log("X:", x, "y:", y);

//3
let x = 9;
let y = "9";

console.log(x == y, x === y);

//4
let x = [1, 2, 3];
let y = x.reverse();

console.log(x, y);

//5
let count = 5;
count += ++count;
console.log(count);

//6
const x = [1, 2, 3];
const y = x.concat(2, 3);

console.log(y);

//7
let x = 10;
let y = 20;

[x, y] = [y, x];
console.log(x, y);

//8
let x = 5;
console.log(x++);

//9
let x = "10";
let y = 20;

console.log(x + y);

//10
const x = [3, 1, 2];
const y = x.sort();

console.log(x, y);

//11
let x = "1";
let y = +x;

console.log(typeof y);

//12
let x = 2;
let y = 3;

console.log(x ** y);

//13
let a = [1, 2];
delete a[0];

console.log(a.length);

// 14
let x = 2;
console.log("x+x");

//15

let x = "Hello";
let y = x;

x += ", World!";
console.log(y);
