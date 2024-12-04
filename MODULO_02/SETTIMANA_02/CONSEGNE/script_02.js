let giunni = {
    name: "Giunni",
    surname: "Gnagni",
    isAmbassador: true,
  };
  
  let user = gianni;
  
  let prices = [5, 20, 17, 58];
  
  let shippingCost = 10;
  
  let totalCart = 0;
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    totalCart += price;
    console.log(totalCart);
  }
  
  if (totalCart < 100) {
    totalCart = totalCart + shippingCost;
  }
  
  if ((user.isAmbassador = true)) {
    totalCart = totalCart - (totalCart * 30) / 100;
  }
  console.log(totalCart);
  
  let users = [];
  users.push(gianni, gionni, giunni);
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.isAmbassador) {
      console.log(`${user.name} ${user.surname} è un ambassador`);
    } else {
      console.log(`${user.name} ${user.surname} non  è un ambassador`);
    }
  }
  
  let ambassadorUser = []
  for (let i = 0; i<users.length; i++){
      let user = users[i]
      if (user.isAmbassador){
          ambassadorUser.push(user)
      }
  }
  console.log(ambassadorUser)