/*ES_01*/

let num01 = 1;
let num02 = 2;

if (num01 == "number" && typeof num02 == "number") {
  if (num01 > num02) {
    console.log(`${num01} maggiore di ${num02}`);
  } else {
    console.log(`${num02} maggiore di ${num01}`);
  }
}

/*ES_02*/
let num = 3;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("medium");
} else if (num < 20) {
  console.log("large");
} else if (num >= 25) {
  console.log("huge");
}

/*ES_03*/
let = i;
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue; 
  } else{ console.log(i);
}
} 

/*ES_04*/
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "il numero è pari");
  } else console.log(i, "il numero è dispari");
}

/*ES_05*/

let num01 = 8;
let num02 = 2;

if (num01 === 8) {
  console.log(`Il numero 1 è uguale a ${num01}`);
} else if (num01 + num02 === 8) {
  console.log(`L'operazione tra i due numeri è uguale a 8`);
} else if (num01 - num02 === 8) {
  console.log(`L'operazione tra i due numeri è uguale a 8`);
} else if (num02 - num01 === 8) {
  console.log(`L'operazione tra i due numeri è uguale a 8`);
}

/*ES_06*/

let totalShoppingCart = 55;
const shipping = 10;
let finalCost = totalShoppingCart + shipping;

if (totalShoppingCart > 50) {
  console.log(
    `Il costo totale è ${totalShoppingCart}, la spedizione è gratuita.`
  );
} else {
  console.log(`Il costo totale tra item e spedizione è ${finalCost}`);
}

/*ES_07*/

let totalShoppingCart = 50;
const shipping = 10;
let discount = totalShoppingCart % 20;
let dicountedPrice = totalShoppingCart - discount;
let finalCost = dicountedPrice + shipping;

if (dicountedPrice > 50) {
  console.log(
    `Il costo totale è ${
      totalShoppingCart - discount
    }, la spedizione è gratuita.`
  );
} else {
  console.log(`Il costo totale tra item e spedizione è ${finalCost}`);
}

/*ES_08*/



/*ES_09*/

let = i;
for (let i = 0; i <= 100; i++) console.log(i);{
  if (i % 3) {
    console.log("Fizz");
  } else if (i % 5) {
    console.log("Buzz");
  } else if (i % 3 && i % 5) {
    console.log("FizzBuzz");
  }
}
