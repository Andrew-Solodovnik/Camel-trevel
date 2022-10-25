const wrapper = document.getElementById("Wrapper");




function createCard (a, b, c) {

const card = document.createElement("article");


const title = document.createElement("h2");
title.classList.add("title");
title.style.color = "red"
title.textContent = a;
card.appendChild(title);


const subtitle = document.createElement("h3");
subtitle.classList.add("subtitle");
subtitle.style.color = "gold"
subtitle.textContent = b;
card.appendChild(subtitle);


const btn = document.createElement("button");
btn.classList.add("btn");
btn.style.color = "teal"
btn.style.background = "yellow"
btn.style.border = "none"
btn.style.padding = "1rem"  
btn.textContent = c;
card.appendChild(btn);




wrapper.appendChild(card)

}
createCard("Dzinsy", "Jesienne", "kup");
createCard("Dzinsy", "Jesienne", "Click");
createCard("Dzinsy", "Jesienne", "Buy");
createCard("Bluza", "Lennia", "Zaplac");
createCard("Rekawice", "Zimowe", "Nacisnij");










const btn = document.getElementById("RandomNumber")

function randomNumber () {

const number = Math.random() * 50;

console.log(number);

}

btn.addEventListener("click", randomNumber)

const field = document.getElementById("Field");
function showValue () {

console.log(field.value);


}

field.addEventListener("input", showValue)






// const pageTitle = document.getElementById("Title");

// pageTitle.textContent = "Hello my friend"
// pageTitle.style.color = "yellow"
// pageTitle.style.background  = "green"
// pageTitle.style.display = "flex"
// pageTitle.style.justifyContent = "center"

// console.log (pageTitle);



// const ulubionykolor = document.getElementById("Color");
// ulubionykolor.textContent = "Czesc"
// ulubionykolor.style.color = "green"
// ulubionykolor.style.background = "blue"



// console.log (ulubionykolor);



// const miasto = document.getElementById("City");
// miasto.textContent = "Bay"
// miasto.style.color = "tomato"


// console.log (miasto);


// const ulubionezwierze = document.getElementById("Pet");
// ulubionezwierze.textContent = "Pies"
// ulubionezwierze.style.color = "red"


// console.log (ulubionezwierze);


// const poraroku = document.getElementById("Season");
// poraroku.textContent = "Zima"
// poraroku.style.color = "gold"


// console.log (poraroku);