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


// control statements
// // decision making 
// let ab=prompt("enter the first value")
// // if (ab==11){
// //      alert("its true")  
// // }
// // else{
// //     console.log("it's incorrect");
// // }

// let xz=prompt("enter the value")
// console.log(xz)
// if(Number(ab)>Number(xz)){
//     console.log("true")
// }
// else if (Number(ab)<Number(xz)){
//     console.log("e;se if true")
// }
// else{
//     console.log("all false")
// }



// if(ab<5){
//     console.log("true")
// }
// else if(ab>5){
//     console.log("e;se if true")
// }
// else{
//     console.log("all false")
// }


//sa,sd,sf
let sa=5;
    sd=9;
    sf=5;
if(sa>=sd && sa>=sf){
    console.log("sa is greatest")
}
else if(sd>=sa && sd>=sf){
    console.log("sd is greatest")
}
else{
    console.log("sf is greatest")
}

let s=5;
    g=9;
    h=5;
if(s>g){
    if(s>h){
        console.log("s is greatest")
    }
    else{
        console.log("h is greatest")
    }
}else if (g>h){
    console.log("g is greatest")

}else {
    console.log("h is the greatest")
}

// loop
for(let i=0;i<5;i++){
    console.log(i)
}

//nested forloop 
for(let x=0;x<5;x++){
    for(let j=0;j<5;j++){
        console.log(x,j)
    }
}
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")
console.log("*****")


    //nested loop
    let star="";
    for(let x=0;x<5;x++){
        for(let j=0;j<5;j++){
            if(x==0 || j==0 || x==4 || j==4){
            
                star+="*"
        }
        else
            { 
            star+=" "
        }
            console.log(x,j)
    }
    star+='\n'
}
console.log(star)


// right angled triangle
let rows = 5;
for (let i = 1; i <= rows; i++) {
    // Prints a line with 'i' number of stars
    console.log("* ".repeat(i));
}




//right angle triangle.
for (let i = 1; i <= 6; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

//hollow right angle triangle.
for (let i = 1; i <= 6; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {

        // Print star on borders
        if (j == 1 || j == i || i == 6) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}

//reversed right angle triangle
for (let i = 6; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

//hollow reverse right angle triangle
for (let i = 6; i >= 1; i--) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {

        // Border conditions
        if (j == 1 || j == i || i == 6) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}

// inverted right angled triangle

let n = 5; // Number of rows
let string = "";

for (let i = 1; i <= n; i++) {
  // 1. Add spaces (n - i)
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
 // 2. Add stars (i)
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);


// Left-Aligned Right Arrow
let maxSize = 5;

// Part 1: Top half (Growing standard triangle)
for (let i = 1; i <= maxSize; i++) {
    console.log("* ".repeat(i));
}

// Part 2: Bottom half (Shrinking reverse triangle)
for (let i = maxSize - 1; i >= 1; i--) {
    console.log("* ".repeat(i));
}


// Right-Aligned Right Arrow (Mirrored)

let maxSize1 = 5;

// Part 1: Top half (Growing with spaces)
for (let i = 1; i <= maxSize; i++) {
    let spaces = "  ".repeat(maxSize - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}

// Part 2: Bottom half (Shrinking with spaces)
for (let i = maxSize - 1; i >= 1; i--) {
    let spaces = "  ".repeat(maxSize - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
}


// for Pyramid
let rows1 = 9;

for (let i = 1; i <= rows1; i++) {
    // 1. Calculate spaces: total rows minus current row number
    let spaces = " ".repeat(rows1 - i);
    
    // 2. Calculate stars: print a star followed by a space
    let stars = "* ".repeat(i);
    
    // 3. Combine and print
    console.log(spaces + stars);
}


let row2 = 9;
for (let i = row2; i>=1; i--) {
    let spaces = " ".repeat(rows1 - i);
    
    // 2. Calculate stars: print a star followed by a space
    let stars = "* ".repeat(i);
    
    // 3. Combine and print
    console.log(spaces + stars);

}

//reversed hollow pyaramid


for (let i = row2; i >= 1; i--) {
    let rowStr = " ".repeat(row2 - i); // 1. Add leading spaces
    
    // 2. Build the star/space section for the current row
    for (let j = 1; j <= i; j++) {
        // Print '*' if it is the top row, first star, or last star of the row
        if (i === row2 || j === 1 || j === i) {
            rowStr += "* ";
        } else {
            rowStr += "  "; // Two spaces to maintain alignment
        }
    }
    console.log(rowStr);
}

// hollow pyramid

for (let i = 1; i<= rows; i++){
    let rowStr =" ".repeat(rows + i);
    
    for(let j = 1; j <= i; j++){

        if ( i===rows || j===1 || j === i){
            rowStr += " * ";
        }
        else {
            rowStr += "  ";
        }
    }
    console.log(rowStr);
}



// Part 1: Top Half (Growing Hollow Pyramid)
for (let i = 1; i <= rows; i++) {
    let rowStr = " ".repeat(rows - i); // Leading spaces
    for (let j = 1; j <= i; j++) {
        // Print star only at the start or end of the star section
        if (j === 1 || j === i) {
            rowStr += "* ";
        } else {
            rowStr += "  "; // Inside hollow space
        }
    }
    console.log(rowStr);
}

// Part 2: Bottom Half (Shrinking Hollow Pyramid)
for (let i = rows - 1; i >= 1; i--) {
    let rowStr = " ".repeat(rows - i); // Leading spaces
    for (let j = 1; j <= i; j++) {
        // Print star only at the start or end of the star section
        if (j === 1 || j === i) {
            rowStr += "* ";
        } else {
            rowStr += "  "; // Inside hollow space
        }
    }
    console.log(rowStr);
}
