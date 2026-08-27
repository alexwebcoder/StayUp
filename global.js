// this updates the date

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});


// Add active class to current page link
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".main-nav a");
  const currentPage = window.location.pathname.split("/").pop(); // gets "about.html" for example

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
 const header = document.querySelector(".site-header");

let isScrolled = false;

window.addEventListener("scroll", () => {

    if (window.innerWidth > 768) return;

    if (!isScrolled && window.scrollY > 60) {

        header.classList.add("scrolled");
        isScrolled = true;

    } else if (isScrolled && window.scrollY < 20) {

        header.classList.remove("scrolled");
        isScrolled = false;

    }

});

})

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');

    menuButton.addEventListener('click', () => {

        const isOpen = mobileNav.classList.toggle('open');

        menuButton.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
            hamburger.textContent = '';
            hamburger.classList.add('mobile-menu-close');
        } else {
            hamburger.textContent = '☰';
            hamburger.classList.remove('mobile-menu-close');
        }

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home-wrapper');
    if (!home) return;

    const image = home.querySelector('.banner-image');
    
    if (!image) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.classList.add('zoom-active');
                observer.unobserve(image);
            }
        });
    }, {
        threshold: 0.7
    });

    observer.observe(image);
});

document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home-wrapper');
    if (!home) return;

   const bannerVideo = home.querySelector('.banner-video');

if (bannerVideo) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const videoSource = document.createElement('source');
                videoSource.src = bannerVideo.dataset.src;
                videoSource.type = 'video/mp4';

                bannerVideo.appendChild(videoSource);
                bannerVideo.load();
                bannerVideo.play();

                observer.unobserve(bannerVideo);
            }
        });
    }, {
        rootMargin: '1600px 0px'
    });

    videoObserver.observe(bannerVideo);
}
});

document.addEventListener('DOMContentLoaded', () => {
    const home = document.querySelector('.home-wrapper');
    if (!home) return;

    const tradeshow = home.querySelector('.tradeshow-animation');
    const tradeshowFrames = home.querySelectorAll('.tradeshow-frame');

    const frame1 = tradeshowFrames[0];
    const frame5 = tradeshowFrames[1];
    const frame6 = tradeshowFrames[2];

    const observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {

            // Start frame 1 animation NOW
            frame1.classList.add('active');

            setTimeout(() => {
                frame1.classList.add('fade-out');
                frame5.classList.add('transitioning');

                setTimeout(() => {
                    frame5.classList.add('frame-five-move');
                }, 1900);

            }, 7000);

            setTimeout(() => {
                frame5.classList.add('fade-out');
                frame6.classList.add('frame-six');

                setTimeout(() => {
                    frame6.classList.add('frame-six-move');
                }, 4000);

            }, 14000);

            observer.unobserve(tradeshow);
        }
    }, {
        threshold: 1.0
    });

    observer.observe(tradeshow);
});

document.addEventListener('DOMContentLoaded', () => {
    const mindsetPage = document.querySelector('.mindset-page');

    if (!mindsetPage) return;

    const whiteGrid = mindsetPage.querySelector('.white');
    const blackGrid = mindsetPage.querySelector('.black');
    const toggleButtons = mindsetPage.querySelectorAll('.color-toggle');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.dataset.color;

            if (color === 'white') {
                whiteGrid.style.display = 'grid';
                blackGrid.style.display = 'none';
            }

            if (color === 'black') {
                whiteGrid.style.display = 'none';
                blackGrid.style.display = 'grid';
            }

            toggleButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
});