let a = 7;
let b = 4;
console.log('The product of two variables is:'),
console.log(a * b);

//Multiple variables 
var obj = {
    x: 1,
    y: 2,
    z: 3
};
console.log('Access properties via dot notation:'); 
console.log(obj.x, obj.y, obj.z);



// Assuming obj is an object with properties x, y, and z
var obj = {
    x: 4,
    y: 5,
    z: 6
};

with (obj) {
    console.log("Access properties within the 'with' block:");
    console.log(x, y, z);
}

