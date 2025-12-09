let counter = 1;
const totalSlides = document.querySelectorAll('.hero__slide').length;

setInterval(function () {
  let slideBtn = document.getElementById("radio" + counter);
  slideBtn.checked = true;
  counter++;
  if (counter > totalSlides) {
    counter = 1;
  }
}, 2000);



const slides = document.querySelector('.hero__slides');
const radios = document.querySelectorAll('input[name="radio-btn"]');
let startX = 0;
let endX = 0;

// Detect touch start
slides.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Detect touch end
slides.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const threshold = 50; // Minimum px swipe to trigger
  let currentIndex = Array.from(radios).findIndex(r => r.checked);

  if (startX - endX > threshold) {
    // Swipe left → next slide
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
  } else if (endX - startX > threshold) {
    // Swipe right → previous slide
    currentIndex = (currentIndex - 1 + radios.length) % radios.length;
    radios[currentIndex].checked = true;
  }
}
