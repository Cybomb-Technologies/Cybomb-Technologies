// Custom JavaScript for Cybomb Technologies Media & Entertainment page
console.log("Cybomb Technologies - Media & Entertainment Page Loaded.");

// Smooth scrolling for anchor links with offset adjustment
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Collapse mobile navbar after click
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// Navbar sticky and shrink on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Ensure all elements are visible without animation
document
  .querySelectorAll(
    ".animate-on-scroll, .card, .tech-stack-item, .industry-card"
  )
  .forEach((el) => {
    el.classList.add("visible");
    el.style.opacity = 1;
    el.style.transform = "none";
  });

// Animated Counter on Scroll
const counters = document.querySelectorAll(".counter");
const speed = 200; // lower = faster

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
};

// Trigger animation when in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect(); // run only once
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(document.querySelector("#media-usage"));
