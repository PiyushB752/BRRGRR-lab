// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
let price = 170;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheesee = document.querySelector("#cheese")
  if (state.Cheese){
    cheesee.style.display = "inherit";
  } else {
    cheesee.style.display = "none"
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoess = document.querySelector("#tomato")
  if (state.Tomatoes){
    tomatoess.style.display = "inherit";
  } else{
    tomatoess.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onionss = document.querySelector("#onion")
  if (state.Onions){
    onionss.style.display = "inherit"
  } else{
    onionss.style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettusess = document.querySelector("#lettuce")
  if (state.Lettuce){
    lettusess.style.display = "inherit"
  } else{
    lettusess.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function (){
  state.Cheese = !state.Cheese;
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function(){
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function (){
  state.Lettuce = !state.Lettuce;
  renderAll();
}
//Challenge 1 - Add/Remove the class active to the buttons based on state
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty; 
  renderPatty(); 
  this.classList.toggle('active');
  document.querySelector(".items-patty").style.display="block" 
  if (state.Patty == false){
    document.querySelector(".items-patty").style.display="none"
  } 
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese; 
  renderCheese(); 
  this.classList.toggle('active');
  // wholeWheatBun = wholeWheatBun + 10
  document.querySelector(".items-cheese").style.display="block" 
  if (state.Cheese == false){
    document.querySelector(".items-cheese").style.display="none" 
    // wholeWheatBun = wholeWheatBun - 10
  } 
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes; 
  renderTomatoes(); 
  this.classList.toggle('active'); 
  // wholeWheatBun = wholeWheatBun + 20
  document.querySelector(".items-tomatoes").style.display="block" 
  if (state.Tomatoes == false){
    document.querySelector(".items-tomatoes").style.display="none" 
    // wholeWheatBun = wholeWheatBun - 20
  }
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions; 
  renderOnions(); 
  this.classList.toggle('active'); 
  // wholeWheatBun = wholeWheatBun + 20
  document.querySelector(".items-onions").style.display="block" 
  if (state.Onions == false){
    document.querySelector(".items-onions").style.display="none"
    // wholeWheatBun = wholeWheatBun - 20 
  }
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce; 
  renderLettuce(); 
  this.classList.toggle('active');
  // wholeWheatBun = wholeWheatBun + 20
  document.querySelector(".items-lettuce").style.display="block" 
  if (state.Lettuce == false){
    document.querySelector(".items-lettuce").style.display="none" 
    // wholeWheatBun = wholeWheatBun - 20
  }
};

//Challenge 2 - Render only the items selected in the ingredients board based on the state

//done above

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients



document.querySelector(".price-details").textContent = `INR ${price}`;
  