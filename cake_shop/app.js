let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let cartListElement = document.querySelector(".cartList");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let cakes = [
  {
    id: 1,
    name: "Black Currant",
    image: "cake_1.jpg",
    price: 600,
  },
  {
    id: 2,
    name: "Browine",
    image: "cake_2.jpg",
    price: 650,
  },
  {
    id: 3,
    name: "Butterscotch",
    image: "cake_3.jpg",
    price: 550,
  },
  {
    id: 4,
    name: "Chocolate",
    image: "cake_4.jpg",
    price: 500,
  },
  {
    id: 5,
    name: "Rainbow cake",
    image: "cake_5.jpg",
    price: 580,
  },
];

let cartList = [];

function initApp() {
  cakes.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="assets/${value.image}">
        <div class="title">${value.name}</div>
        <div class= "price">Rs.${value.price}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCart(key) {
  if (cartList[key]) {
    // cartList[key] = JSON.parse(JSON.stringify(cakes[key]));
    cartList[key].quantity += 1;
  } else {
    cartList[key] = { ...cakes[key], quantity: 1 };
  }
  reloadCart();
}

function reloadCart() {
  cartListElement.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  for (const key in cartList) {
    if (cartList.hasOwnProperty(key)) {
      const value = cartList[key];
      totalPrice += value.price * value.quantity;
      count += value.quantity;
      let newLi = document.createElement("li");
      newLi.innerHTML = `
      <div><img src="assets/${value.image}"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
      </div>`;
      cartListElement.appendChild(newLi);
    }
  }
  total.innerText = `Rs.${totalPrice.toLocaleString()}`;
  quantity.innerText = count;
}

function changeQuantity(key, newQuantity) {
  if (newQuantity <= 0) {
    delete cartList[key];
  } else {
    cartList[key].quantity = newQuantity;
  }
  reloadCart();
}
