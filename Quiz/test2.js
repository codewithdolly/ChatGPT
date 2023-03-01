//1
let x= [2,3,4];
x.push(1);

console.log(x);

//2
let a= [1,2];
a[3]= 4;

console.log(a);


//3
let x= 1;
console.log(typleof x);

//4
let x= 5;
let y = "5";

console.log(x!=y, x!==y);

//5
const number= [1,2,3];
const [a,b,...c]= number;

console.log(c.length);


//6
let x= 10;
let y= 20;
let z= x>y;

console.log(!z);

//7
let x= 2;
console.log(x+ `${x}` - - `${x}`);


//8
const array= [1,2,3,4,5];
console.log(array[1]);

//9
let x= "Hello, ";
let y= "World!"

console.log(`${x}`+ "y");

// 10
let x= NaN;
let y = NaN;

console.log(x==y, x===Y);


//11
let x= "Carlifornia";
console.log(x.includes('for'));


//12
const obj1= {a:1, b:{c:2}};
const onj2= {...obj1}
obj2.b.c=3

console.log(obj1.b.c);


//13
let x= NaN;

console.log(typeof x);


//14
const x= "hello";
const y= x.toUpperCase();

console.log(x,y);


//15
let x=[ 1, 2, 3];
let y = x.length>3?'lol': "xd";
x.push(4);

console.log(y);

