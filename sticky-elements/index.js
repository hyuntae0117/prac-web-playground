const html = document.documentElement;
const frameCount = 147;

const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4,'0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

window.onload = function () {
  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");
  
  
  // Set canvas dimensions
  canvas.width = 1158;
  canvas.height = 770;
  
  const img = new Image()
  img.src = currentFrame(1);
  console.log(img.src);
  img.onload=() => context.drawImage(img, 0, 0);
}

const updateImage = index => {
  const canvas = document.getElementById("hero-lightpass");
  const context = canvas.getContext("2d");
  const img = new Image()
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
  const scrollTop = Math.max(document.body.scrollTop, 0);
  const section1 = document.getElementById("section01");
  const section2 = document.getElementById("section02");
  const section3 = document.getElementById("section03");
  const item1 = document.getElementById("item01");
  const item2 = document.getElementById("item02");
  const item3 = document.getElementById("item03");

  const scrollHeight = document.documentElement.scrollHeight;

  const availableScroll = section1.offsetTop + (section1.clientHeight - item1.clientHeight);

  const availableScroll2 = section2.offsetTop + (section2.clientHeight - item2.clientHeight)

  const availableScroll3 = section3.offsetTop + section2.clientHeight + (section3.clientHeight - item3.clientHeight)

  item1.classList.remove('focused');
  item2.classList.remove('focused');
  item3.classList.remove('focused');
  item1.classList.remove('gone');
  item2.classList.remove('gone');
  item3.classList.remove('gone');

  console.log(section1.offsetTop);

  console.log(section2.offsetTop);
  
  console.log(section3.offsetTop);

  section2.offsetTop
  
  switch (true) {
    case (scrollTop <= availableScroll): 
      item1.classList.add('focused'); 
      break;
    case(scrollTop <= availableScroll + item1.clientHeight):
      item1.classList.add('gone'); 
      break;
    case (scrollTop <= availableScroll2):
      item1.classList.add('gone');
      item2.classList.add('focused');
      break;
    case (scrollTop <= availableScroll2 + item2.clientHeight):
      item1.classList.add('gone');
      item2.classList.add('gone');
      break;
    case (scrollTop <= availableScroll3):
      item1.classList.add('gone');
      item2.classList.add('gone');
      item3.classList.add('focused');
  }
});