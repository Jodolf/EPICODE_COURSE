function h1Change() {
  document.querySelector("h1").innerText = "changed";
}

function colorChange() {
  document.querySelector("body").style.backGroundColor = "green";
}

function changeAddress() {
  document.querySelector("#address").innerText = "new address";
}

function addCss() {
  let aTags = document.querySelectorAll("a");
  for (i = 0; i < aTags.length; i++) aTags[i].classList.add("newLink");
}

function imgOpacity() {
  let images = document.querySelectorAll("img");
  for (i = 0; i < images.length; i++) {
    let singleImg = images[i];
    singleImg[i].toggle("hidden");
  }
}

function getRandomColor() {
  let red = math.round(math.random() * 255);
  let green = math.round(math.random() * 255);
  let blue = math.round(math.random() * 255);
  return "rgb(" + red + "," + green + "," + blue + ")";
}

function setRandomColor() {
  let randomColor = getRandomColor();
  let prices = document.querySelector(".price");
  for (i = 0; i < prices.lenght; i++) {
    let singlePrice = prices[i];
    singlePrice.style.color = randomColor;
  }
}
