//1

let x= [1,2,3];

let y= x.map(function (num) {
    return num*2;
})

console.log(y);



//2
let x= {name:"John"};
let y= JSON.parse(JSON.stringify(x));
let z= x;

console.log(x===y, x===z);


//3
const key = "message";
const letter= {message:"Hello, World!", 
[key]:"Hello, Earth"};


console.log(letter.message);


//4
let x= [10, 20, 30];
let y= [40, 50, 60];

let result = x.map(function (num) {
    return num+ y.length;
})

console.log(result);


//5
let x= {name:"John"};
let y= Object.assign({}, x)

x.name= "Sam"


console.log(x.name, y.name);


//6
function sum(x) {
    return function (y) {
    return x+y;    
    }  
}

let add5= sum(5);
let result = add5(10);

console.log(result);