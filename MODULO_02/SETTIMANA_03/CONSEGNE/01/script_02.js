function addTolibrary(book, targetLibrary) {
  targetLibrary.push(book);
}

let library = [];
let libro = "Moby Dick";

addTolibrary(book, library);
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

function reverseString(str) {
  return str.split("").reverse("").join("");
}

console.log(str(EPICODE));

/**************************************************************************************/

function upperFirst(str) {
  return str.charAt(0).toUppercase + str.slice(1);
}

/**************************************************************************************/

function giveMeRandom(n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(math.floor(math.random() * 10));
  }
  return arr;
}

/**************************************************************************************/

function crazyDiff(n) {
  let num = 19;
  let risultato = n - num;
  if (risultato > num) {
    return risultato * 3;
  } else {
    return risultato;
  }
}

/**************************************************************************************/

function codify(str) {
  if (str.startsWith("code")) {
    return str;
  } else {
    return "code" + str;
  }
}

/**************************************************************************************/

function check3and7 (n){
  if (n>0 && (n%3===0)||(n%7===0)){
    return true
  }else{
    return false
  }
}

/**************************************************************************************/

function cutString(str){
return str.slice(1,-1)
}