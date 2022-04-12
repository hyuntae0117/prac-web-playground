window.addEventListener("scroll", function () {
  let offset = window.scrollY;
  console.log('offset: ' + offset);
  const parallax = document.getElementById("parallax");
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});