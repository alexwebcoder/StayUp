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
const closeButton = document.querySelector('.mobile-menu-close');


menuButton.addEventListener('click', () => {

    mobileNav.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');

});


closeButton.addEventListener('click', () => {

    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');

});

});


document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.banner-image');

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
   const bannerVideo = document.querySelector('.banner-video');

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
        rootMargin: '1000px 0px'
    });

    videoObserver.observe(bannerVideo);
}
});

document.addEventListener('DOMContentLoaded', () => {
   const tradeshowFrames = document.querySelectorAll('.tradeshow-frame');

   const frame1 = tradeshowFrames[0];
   const frame5 = tradeshowFrames[1];
   const frame6 = tradeshowFrames[2];


   setTimeout(() => {
    frame1.classList.add('fade-out');
    frame5.classList.add('transitioning');

       setTimeout(() => {
        frame5.classList.add('frame-five-move');
    }, 2000);

    }, 7000);

     setTimeout(() => {
    frame5.classList.add('fade-out');
    frame6.classList.add('frame-six');

    // Start final push after crossfade
    setTimeout(() => {
        frame6.classList.add('frame-six-move');
    }, 2000);

}, 14000);
    
});
