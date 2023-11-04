// _____________________________text tranformation________________________________-
// const transformText=document.getElementById("transformText")

// const textLoader=()=>{

//     setTimeout(() => {
//         transformText.textContent="DESIGN"
//     }, 0);

//     setTimeout(() => {
//         transformText.textContent="DEVELOPMENT"
//     }, 4000);

//     setTimeout(() => {
//         transformText.textContent="REALITY!"
//     }, 8000);

// }
// textLoader()
// setInterval(textLoader,12000)

// _______________________________________________COPIED TRANFORMATION___________________________________________________

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["DESIGN", "DEVELOPMENT", "REALITY!"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(".transform-text").innerHTML =
        text.substring(0, i + 1) +
        '<span class="tranform-text" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

// _____________________________________circular text _______________________________________

const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
  )
  .join("");

// _____________________________________________horizontal scroll____________________________

// const cardScrollBar=document.getElementById("cardScrollBar")
// function transformScroll(event) {
//   if (!event.deltaY) {
//     return;
//   }
//   event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
//   event.preventDefault();
// }
// cardScrollBar.addEventListener('wheel', transformScroll);

// ______________________video-custom-settings________________________________________-

let Working_video = document.querySelector(".working-video");
let outer_circle_container = document.querySelector(".outer-circle-container");
// Working_video.muted=true
function videoControlles() {
  Working_video.setAttribute("controls", "true");
  outer_circle_container.style.display = "none";
  if (Working_video.paused) {
    Working_video.play();
    Working_video.muted = false;
  } else {
    Working_video.play();
  }
}

// _________________tooltips______________________________
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
