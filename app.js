const heroTextElem = document.querySelector('.hero-banner h1');
const strText = heroTextElem.textContent;
const splitText = strText.split("");
heroTextElem.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  heroTextElem.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = heroTextElem.querySelectorAll('span')[char];
  span.classList.add('fade-in');
  char++

  if (char === splitText.length) {
    complete();
    return;
  }
}


function complete() {
  clearInterval(timer);
  timer = null;
}