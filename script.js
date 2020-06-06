const value = document.querySelector("#value");

// let i = 0;

// function countUp() {
//   second++;
//   value.innerHTML = i;
//   if (second == 185) clearInterval(counter);
// }
// const counter = setInterval(countUp, 1);

let i = 0;

function countUp() {
  if (i >= 185) {
    clearInterval(counter);
  } else {
    i++;
    value.innerHTML = i;
  }
}
const counter = setInterval(countUp, 1);
