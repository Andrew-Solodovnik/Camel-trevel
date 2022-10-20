

const navigation = document.getElementById("navigation-item-btn")



const btn = document.getElementById("hanburgeropen")

function hanburgeropen () {

navigation.classList.toggle("show");

const number = Math.random() * 50;

console.log(number);

}

btn.addEventListener("click", hanburgeropen)






const clock = document.getElementById("footer-clock-open");
const clockBtn = document.getElementById("ClockBtn")

function footerClockOpen () {

clock.classList.toggle("show");

const number = Math.random() * 50;

console.log(number);

}

ClockBtn.addEventListener("click", footerClockOpen);



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





const greeting = document.getElementById("Greeting");

function showGreeting () {

const hour = new Date ().getHours();
if(hour >= 6 && hour < 1) {
    greeting.textContent = "Good Morning";
}

else if(hour >= 1 && hour < 18) {

    greeting.textContent = "Good Afternoon";
}

else if(hour >= 18 && hour < 24) {

    greeting.textContent = "Good Evening";
}

else {
    greeting.textContent = "Good Hight"
}

}
showGreeting();



// ================== DAY ================== //

const currentDay = document.getElementById("Day")
const day = new Date().toLocaleString('en-us', {weekday:'long'});
currentDay.textContent = day
console.log(day);







