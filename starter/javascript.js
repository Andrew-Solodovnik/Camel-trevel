const navigation = document.getElementById("navigation-item-btn");

// ================== Nanburger ================== //

const btn = document.getElementById("hanburgeropen");

function hanburgeropen() {
  navigation.classList.toggle("show");

  const number = Math.random() * 50;

  console.log(number);
}

btn.addEventListener("click", hanburgeropen);

// ================== Footer-Clock================== //

const clock = document.getElementById("footer-clock-open");
const clockBtn = document.getElementById("ClockBtn");

function footerClockOpen() {
  clock.classList.toggle("show");

  const number = Math.random() * 50;

  console.log(number);
}

ClockBtn.addEventListener("click", footerClockOpen);

// ================== Good Morning ================== //

const greeting = document.getElementById("Greeting");

function showGreeting() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 1) {
    greeting.textContent = "Good Morning";
  } else if (hour >= 1 && hour < 18) {
    greeting.textContent = "Good Afternoon";
  } else if (hour >= 18 && hour < 24) {
    greeting.textContent = "Good Evening";
  } else {
    greeting.textContent = "Good Hight";
  }
}
showGreeting();

// ================== DAY ================== //

const currentDay = document.getElementById("Day");
const day = new Date().toLocaleString("en-us", { weekday: "long" });
currentDay.textContent = day;
console.log(day);

// ================== TIME ================== //

const currentTIME = document.getElementById("Time");
function showtime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeValue = "" + (hours > 24 ? hours - 24 : hours);
  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  timeValue += (seconds < 10 ? ":0" : ":") + seconds;
  currentTIME.textContent = timeValue;
  timerID = setTimeout("showtime()", 1000);
  timerRunning = true;
}
showtime();

// ================== scroll header ================== //

const className = "inverted";
const scrollTrigger = 500;
const header = document.getElementById("Header");

function changeHeaderBg() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    header.classList.add(className);
  } else {
    header.classList.remove(className);
  }
}

window.addEventListener("scroll", changeHeaderBg);

// Tablica obiectow

const hotels = [
  {
    name: "King Hotel",
    city: "Cairo",
    view: "Mountain View",
    date: "30 oct-4 nov",
    price: 120,
    rate: 3,
    image: "./images/Widget 1.png",
  },

  {
    name: "Prince Hotel",
    city: "Giza",
    view: "Mountain View",
    date: "30 oct-4 nov",
    price: 150,
    rate: 4,
    image: "./images/Widget 2.png",
  },

  {
    name: "Pearl Hotel",
    city: "Hurg",
    view: "Mountain View",
    date: "30 oct-4 nov",
    price: 200,
    rate: 5,
    image: "./images/Widget 3.png",
  },

  {
    name: "Lagoon Hotel",
    city: "Alex",
    view: "Mountain View",
    date: "30 oct-4 nov",
    price: 250,
    rate: 5,
    image: "./images/Widget 4.png",
  },
];

const hotelWrapper = document.getElementById("Section-hotel-wrapper");

hotels.forEach((hotel) => {
  const card = document.createElement("div");
  card.classList.add("section-hotel-wrapper");

  const ourHotel = document.createElement("div");
  ourHotel.classList.add("our-hotel");

  const name = document.createElement("h2");
  name.innerHTML = `${hotel.name}, ${hotel.city} <span class="our-hotel-img"><i
  class="bi bi-stars"></i></span>${hotel.rate}</h2>`;

  const image = document.createElement("img");
  image.classList.add("section-img");

  name.classList.add("our-hotel-title");

  image.src = hotel.image;

  const ourHotelTextOne = document.createElement("p");
  ourHotelTextOne.classList.add("our-hotel-text-one");
  ourHotelTextOne.textContent = hotel.view;

  const ourHotelTextTwo = document.createElement("p");
  ourHotelTextTwo.classList.add("our-hotel-text-two");
  ourHotelTextTwo.textContent = hotel.date;

  const ourHotelTextThree = document.createElement("p");
  ourHotelTextThree.classList.add("our-hotel-text-three");
  ourHotelTextThree.innerHTML = `<strong>$${hotel.price} </strong><span class="our-hotel-text-night">per
night</span>`;

  card.appendChild(image);
  ourHotel.appendChild(name);
  ourHotel.appendChild(ourHotelTextOne);
  ourHotel.appendChild(ourHotelTextTwo);
  ourHotel.appendChild(ourHotelTextThree);
  card.appendChild(ourHotel);
  hotelWrapper.appendChild(card);
});

// Weather

const KEY = "912c622485ebcccfe6e75ebb3dc2de10";

const URL = `https://api.openweathermap.org/data/2.5/weather?q=Katowice&appid=${KEY}`;

const showWeather = async () => {
    
const warm = document.getElementById("Warm")
const cold = document.getElementById("Cold")
const water = document.getElementById("Water")
const wind = document.getElementById("Wind")
  const data = await fetch(URL);
  const weather = await data.json();

  warm.textContent = weather.main.temp_max
  cold.textContent = weather.main.temp_min
  water.textContent = weather.main.humidity
  wind.textContent = weather.main.pressure

  console.log(weather);
};

showWeather();

// obiekt i tablica

// const userName = document.getElementById("User");
// const userAge = document.getElementById("Age");
// const userStatus = document.getElementById("Student");
// const user = {
//     name: "jan",
//     age:23,
//     city:"Katowice",
//     isStudent: true,
//     showInfo(){
//         console.log("Informacje o uzytkowniku");
//     }
// };

// userAge.textContent = user.age;

// if(user.isStudent === true) {
//     userStatus.textContent = "znizka dla ucznia"
// }

// else {
//     userStatus.textContent = "brak znizki"
// }

// userName.textContent = user.name

// tablica

// const users = ["anna", "jan", "dawid"];

// console.log(users);

// userName.textContent = users [users.length - 1];

// users.push("beata")

// users.reverse();

// users.sort();

// users.pop();

// users.splice(1,2)

// users.forEach(function
//     (user) {

// console.log("to jest " + user);
//     });

// const isAdmin = true;

// if(isAdmin === true) {
//     console.log ("zalogowano jako admin")
// }

// else {
//     console.log("Brak dostepu")
// }

// console.log (isAdmin);

// const user ="jan"

// if(user === "janek") {
//     console.log ("zalogowano jako admin")
// }

// else {
//     console.log("Brak dostepu")
// }

// console.log (isAdmin);

// const isAdmin = true;

// if(isAdmin === true) {
//     console.log ("zalogowano jako admin")
// }

// else {
//     console.log("Brak dostepu")
// }

// console.log (isAdmin);

// const num = "45"

// if(num == 45)
// {
//     console.log("liczba sie zgadza")
// }

// const num = 11;

// if(num > 10)
// {
//     console.log("liczba wieksza od 10")
// }
// else {
//     console.log("liczba mniejsza od 10")
// }

// const loginBtn = document.getElementById("Login");
// const loginField = document.getElementById("Field");
// const passwordField = document.getElementById("Password");

// function login () {
//     if(loginField.value === "admin" && passwordField.value === "haslo123") {
//         console.log("Witamy w panelu")
//     }

//     else if(loginField.value === "godmode") {
//         console.log("odblokovano dostep")
//     }

//     else {
//         console.log("Bledne dane");
//     }
// }

// loginBtn.addEventListener("click", login);
