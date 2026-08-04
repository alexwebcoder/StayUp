const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.slides picture');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let autoScroll;


// Determine how many shirts are visible
function getVisibleCards() {

    if (window.innerWidth >= 1200) {
        return 3;
    }

    if (window.innerWidth >= 768) {
        return 2;
    }

    return 1;
}


// Calculate how far to scroll
function getScrollAmount() {

    const card = cards[0];
    const cardWidth = card.getBoundingClientRect().width;

    return cardWidth * getVisibleCards();

}


// Next button
next.addEventListener('click', () => {

    const maxScroll = slides.scrollWidth - slides.clientWidth;

    if (slides.scrollLeft >= maxScroll - 5) {

        slides.scrollTo({
            left: 0,
            behavior: 'smooth'
        });

    } else {

        slides.scrollBy({
            left: getScrollAmount(),
            behavior: 'smooth'
        });

    }

});


// Previous button
prev.addEventListener('click', () => {

    if (slides.scrollLeft <= 5) {

        slides.scrollTo({
            left: slides.scrollWidth,
            behavior: 'smooth'
        });

    } else {

        slides.scrollBy({
            left: -getScrollAmount(),
            behavior: 'smooth'
        });

    }

});


// Auto scroll
function startAutoScroll() {

    clearInterval(autoScroll);

    if (window.innerWidth >= 768) {

        autoScroll = setInterval(() => {

            next.click();

        }, 4000);

    }

}


startAutoScroll();


// Reset on resize
window.addEventListener('resize', () => {

    startAutoScroll();

});