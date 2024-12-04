//ESERCIZIO 01
function compare(x, y) {
    if (x === 50 || y === 50 || y + x === 50) {
      return true;
    } else {
      return false;
    }
  }
  console.log(compare(10,5))
  
  
  //ESERCIZIO 02
  function remove(string, position) {
    let letters = string.split("");
    letters.splice(position, 3);
    return letters.join("");
  }

console.log(remove("ciaociaociaociao", 2))
  

  //ESERCIZIO 03
  function between(num) {
    if ((num >= 40 && num <= 60) || (num >= 50 && num <= 80)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(between(45))
  

  //ESERCIZIO 04
  function addPrefix(city) {
    return city.startsWith("Los") || city.startsWith("New");
  }
  console.log(addPrefix("Los Angeles"))
  

  //ESERCIZIO 05
  function sum(array) {
    let base = 0;
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      base += item;
    }
    return base;
  }
  console.log(sum([1,2,3,4,5]))
  

  //ESERCIZIO 06
  function checkArray(array) {
    if (array.includes(1) || array.includes(3)) {
      return false;
    } else {
      return true;
    }
  }
  console.log(checkArray([1,2,3,4,5,]))
  

  //ESERCIZIO 07
  function anglecheck(angle) {
    if (angle < 90) {
      return "acuto";
    } else if (angle > 90 && angle < 180) {
      return "ottuso";
    } else if ((angle === 90)) {
      return "retto";
    } else if ((angle === 180)) {
      return "piatto";
    }
  }
  console.log(anglecheck(85))
  
  
  //ESERCIZIO 08
  function acronym (text){
      let singleLetters = text.split(" ")
      let temp = ""
      for (let i = 0; i < singleLetters.length; i++) {
        const phrase = singleLetters[i]
        temp += phrase.charAt(0)
      }
      return temp
    }
   console.log(acronym("Fabbrica Italiana Automobili Torino"))
