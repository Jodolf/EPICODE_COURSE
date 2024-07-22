const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
};

const gianni = {
    name: "Gianni",
    lastName: "Gionni",
    isAmbassador: true,
};

const maria = {
    name: "Maria",
    lastName: "Rosa",
    isAmbassador: false,
};

const prices = [34,5,50]
const shippingCost= 50
let aquiringUser= maria

let cart =0
for (let i=0; i < prices.length; i++){
cart += prices[i]
}

console.log(cart)


if (cart <= 100){
    cart += 50;
}

console.log(cart)


if(aquiringUser.isAmbassador){
    cart *= 0.7
}

console.log(aquiringUser)
console.log(cart)


let buyer = []

buyer.push(marco)
buyer.push(gianni)
buyer.push(maria)

console.log (buyer)

let ambassadors = [];
for (let i = 0; i <buyer.length; i++){
    if (buyer[i].isAmbassador){
        ambassadors.push(buyer[i])
        console.log(buyer[i].name + buyer[i].lastName + " è un Ambassador")
    } else{
        console.log(buyer[i].name + buyer[i].lastName  + " non è Ambassador")
    }
}