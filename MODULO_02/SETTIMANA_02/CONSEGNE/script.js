//01
let num1 = 0;
let num2 = 2;

if (num1 > num2) {
  console.log(`${num1} è maggiore di ${num2}`);
} else {
  console.log(`${num1} è minore di ${num2}`);
}

//02
let num = 20;
if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
}

//03
for (let i = 0; i <= 10; i++) {
  if (i === 3 || 8) {
    continue;
  } else console.log(i);
}

//04
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "pari");
  } else console.log(i, "dispari");
}

//05
let num4 = 8;
let num5 = 8;

if (num4 + num5 === 8) {
  console.log(`la somma tra ${num4} e ${num5} è 8`);
} else if (num4 - num5 === 8 || num5 - num4 === 8) {
  console.log(`la sottrazione tra ${num4} e ${num5} è 8`);
}
if (num4 === 8) {
  console.log(`${num4} è il primo numero`);
}
if (num5 === 8) {
  console.log(`${num5} è il secondo numero`);
}

//06-07
let totalShoppingCart = 80;
let spedizione = 10;
let totale = totalShoppingCart + spedizione;
let discountedCart = totalShoppingCart - (totalShoppingCart * 30) / 100;

if (discountedCart < 50) {
  console.log(totale);
} else {
  console.log(discountedCart);
}

//8
isMale ? (gender = "male") : (gender = "female");

//09
for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  }
}
