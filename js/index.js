// animation code
// AOS.init({
//   duration: 1500,
// });



// text slider effect
const txts = document.querySelector(".animated-text").children,
  txtsLen = txts.length;
// console.log(txts);
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animatedText() {
  // console.log(txts[index])
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }

  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }

    animatedText();
  }, textInTimer);
}
window, (onload = animatedText);


  

// // navbar bg color
// var navbar = document.getElementById("nav");
// // console.log(navbar);
// // var navbar_a = document.querySelectorAll(".nav-item");

// window.onscroll = function () {
//   scrollFunc();
// };

// function scrollFunc() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     navbar.style.background = "#7052fb";
//     // navbar_a.style.color = "#000";
//   } else {
//     navbar.style.background = "none";
//     // navbar_a.style.color = "#fff";
//   }
// }


