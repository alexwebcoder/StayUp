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


window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.innerWidth <= 768) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});
