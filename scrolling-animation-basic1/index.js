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
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameCount,  Math.ceil(scrollFraction * frameCount) + 1)

  requestAnimationFrame(() => updateImage(frameIndex))
});

preloadImages();