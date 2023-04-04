// Initialize the DOM elements
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

// taking a variable with value zero
let a = 0;

// add an event click in the plus sign
plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
})

// add an event click in the minus sign
minus.addEventListener("click", () => {
    a--;
    num.innerText = a;
})