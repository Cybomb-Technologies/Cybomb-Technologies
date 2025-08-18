// Navbar shrink effect on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Simple stats counter animation
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / target), 10);
    let current = 0;
    const timer = setInterval(() => {
      current += Math.ceil(target / (duration / stepTime));
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, stepTime);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Stats animation trigger
  const statsSection = document.getElementById("statistics");
  let animated = false;
  function onScrollOrLoad() {
    if (!animated) {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        animateCounters();
        animated = true;
      }
    }
  }
  window.addEventListener("scroll", onScrollOrLoad);
  onScrollOrLoad();

  // Smooth scroll + auto close navbar on mobile
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        document.querySelector(this.hash).scrollIntoView({
          behavior: "smooth",
        });
      }

      // Close navbar only in mobile view
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector("#navbarNav");
      if (
        window.getComputedStyle(navbarToggler).display !== "none" &&
        navbarCollapse.classList.contains("show")
      ) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
});
