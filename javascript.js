

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

ClockBtn.addEventListener("click", footerClockOpen)











