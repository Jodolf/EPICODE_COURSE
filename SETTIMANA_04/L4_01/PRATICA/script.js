/*ES_01*/

let num01 = 1;
let num02 = 2;

if(num01=="number" && typeof num02 =="number"){
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
} else if (num > 25) {
  console.log("huge");
}

/*ES_03*/
let = i
for (let i = 0; i <= 10; i++) {
    if (i === 3 || i === 8) {
      continue
    } else console.log(i)
  }
  
/*ES_04*/
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i, "il numero è pari")
    } else console.log(i, "il numero è dispari")
  }

  /*ES_05*/
  