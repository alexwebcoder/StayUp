
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  if (i < 0) index = images.length - 1;
  else if (i >= images.length) index = 0;
  else index = i;

  const slideWidth = document.querySelector('.slider').clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));


let startX = 0;
let endX = 0;

slides.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = endX - startX;
  if (Math.abs(diff) > 50) { // 50px threshold
    if (diff < 0) showSlide(index + 1); // swipe left → next
    else showSlide(index - 1);          // swipe right → prev
  }
}


if (window.innerWidth > 768) {
  setInterval(() => {
    showSlide(index + 1);
  }, 2000); // change 3000 to adjust speed (ms)
}



