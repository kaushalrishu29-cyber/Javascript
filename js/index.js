//consoles
console.log("Manshi Gyawali");
console.warn("warning");
console.error(" error");


//variable types
const x = 10;
console.log(x);

let a = 10;
console.log(a);

a= 40;
console.log(a);

let b=10.43;
let c = "10";
console.log(typeof(b));
console.log(typeof(c));

console.log(b+c);

//strings
let name = "Manshi";
let surname = "Gyawali";
console.log(name + " " + surname);

//numbers
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//boleans
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

//objects
let person = {
    name: "Manshi",
    age: 25
};
console.log(person);
console.log(person.name);
console.log(person.age);

//symbols
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2);

//undefined
let undefinedVar;
console.log(undefinedVar);

//null
let nullVar = null;
console.log(nullVar);

//operators
let x1 = 10;
let y1 = 20;
console.log(x1 + y1);
console.log(x1 - y1);
console.log(x1 * y1);
console.log(x1 / y1);

//comparison operators
console.log(x1 > y1);
console.log(x1 < y1);
console.log(x1 >= y1);
console.log(x1 <= y1);
console.log(x1 === y1);
console.log(x1 !== y1);
 
//arithemetic operator
let xx=10;
let y=20;
console.log(xx+y)
console.log(xx-y)
console.log(xx*y)
console.log(xx/y)
console.log(xx%y)
console.log(xx**y)
console.log(xx++)
console.log(xx)
console.log(xx--)
console.log(++xx)
console.log(--xx)


//asignment operators
let f=10;
console.log(f)
console.log(f+=y)
// f=f+y

//relation/comparision
let g="10"
console.log(f==g)
console.log(f===g)

// conditional
console.log(xx>f?"xx is greater":"f is greater")
