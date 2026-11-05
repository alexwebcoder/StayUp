
// Initialize each slider independently
document.querySelectorAll('.slider-wrapper').forEach((wrapper) => {

    const slides = wrapper.querySelector('.slides');
    const cards = wrapper.querySelectorAll('.slides picture');
    const prev = wrapper.querySelector('.prev');
    const next = wrapper.querySelector('.next');

    // Make sure all slider elements exist
    if (!slides || !cards.length || !prev || !next) {
        return;
    }

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

        const maxScroll = slides.scrollWidth - slides.clientWidth;

        if (slides.scrollLeft <= 5) {

            slides.scrollTo({
                left: maxScroll,
                behavior: 'smooth'
            });

        } else {

            slides.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });

        }

    });

    // One-time carousel nudge
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    slides.scrollBy({
                        left: 60,
                        behavior: 'smooth'
                    });

                    setTimeout(() => {

                        slides.scrollBy({
                            left: -60,
                            behavior: 'smooth'
                        });

                    }, 800);

                }, 300);

                observer.disconnect();

            }

        });

    }, {
        threshold: 0.5
    });

    observer.observe(slides);

});
