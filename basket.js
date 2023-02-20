let btnOne = document.getElementById("btn-one");
let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

let btnTwo = document.getElementById("btn-two");
let btnThree = document.getElementById("btn-three");
let scoreHome = 0;
let scoreGuest = 0;

function one() {
  scoreHome += 1;
  scoreHomeEl.textContent = scoreHome;
}
function two() {
  scoreHome += 2;
  scoreHomeEl.textContent = scoreHome;
}
function three() {
  scoreHome += 3;
  scoreHomeEl.textContent = scoreHome;
}
function oneG() {
  scoreGuest += 1;
  scoreGuestEl.textContent = scoreGuest;
}
function twoG() {
  scoreGuest += 2;
  scoreGuestEl.textContent = scoreGuest;
}
function threeG() {
  scoreGuest += 3;
  scoreGuestEl.textContent = scoreGuest;
}
// function winner() {
//   if (scoreGuest < scoreHome) {
//     document.getElementById("score-home").style.color = "1px solid lightblue";
//     document.getElementById("score-home").style.boxShadow =
//       "0px 0px 20px lightblue";
//   } else {
//     document.getElementById("score-guest").style.boxShadow =
//       "0px 0px 20px lightblue";
//     document.getElementById("score-guest").style.border = "1px solid lightblue";
//   }
// }
