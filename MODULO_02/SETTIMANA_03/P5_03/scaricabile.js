function addTolibrary(book, targetLibrary) {
  targetLibrary.push(libro);
}

let library = [];
let libro = "Moby Dick";

addTolibrary(libro, library);
console.log(library);

/**************************************************************************************/

function addition(a, b) {
  return a + b;
}

console.log(addition(2, 3));
console.log(addition(10, 3));

/**************************************************************************************/

function crazySum(a, b) {
  let soluzione = a + b;
  if (a === b) {
    return soluzione * 3;
  } else {
    return soluzione;
  }
}

console.log(crazySum(3, 3));

/**************************************************************************************/

function boundary(a) {
  if ((a >= 20 && a <= 100) || a === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary());

/**************************************************************************************/
function reverseString (string) {
    let result = ""
for (let i = (string.lenght - 1); i>=0; i--){
    result += string[i]
}
return result

};
console.log(reverseString("EPICODE"));


function reverseString (string) {
  return string.split("").reverse("").join("");
};

console.log(reverseString("EPICODE"));

/**************************************************************************************/

function upperFirst(str){
    let splitString = (str.split(" "))
    for(let i = 0 ; i < splitString.lenght; i++){
        splitString[i] = splitString[i][0].toUppercase
    }
}

console.log(upperFirst("ciao altra stringa"))

/**************************************************************************************/

function giveMeRandom (n){
    return 
}