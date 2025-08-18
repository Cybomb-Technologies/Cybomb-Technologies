// === Cybomb Sports - Scripts (Cleaned & Optimized) ===
document.addEventListener("DOMContentLoaded", () => {
  // Sections & nav links
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".navlinks a"));
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navlinks");

  // Helper: close menu
  const closeMenu = () => {
    if (!navMenu) return;
    navMenu.classList.remove("active");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  };

  // Mobile hamburger toggle
  if (menuToggle && navMenu) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-controls", "navlinks");

    const toggleNav = (e) => {
      if (e) e.preventDefault();
      const active = navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", active ? "true" : "false");
    };

    menuToggle.addEventListener("click", toggleNav, { passive: false });
    menuToggle.addEventListener("touchend", toggleNav, { passive: false });
  }

  // Smooth scroll + close menu on link click; also set active class
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  navLinks.forEach((a) => {
    a.addEventListener(
      "click",
      (e) => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const id = href.slice(1);
          scrollToSection(id);
          closeMenu();
          // Update URL hash without jumping
          history.pushState(null, "", `#${id}`);
        }
      },
      { passive: false }
    );

    a.addEventListener(
      "touchend",
      (e) => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const id = href.slice(1);
          scrollToSection(id);
          closeMenu();
          history.pushState(null, "", `#${id}`);
        }
      },
      { passive: false }
    );
  });

  // Highlight active link on scroll
  const setActive = () => {
    let currentId = null;
    const offset = 120; // header offset
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentId = sec.id;
      }
    });
    navLinks.forEach((a) => {
      const href = a.getAttribute("href") || "";
      const matches = currentId && href === `#${currentId}`;
      a.classList.toggle("active", !!matches);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      // Ensure desktop shows menu normally
      if (window.innerWidth >= 1025 && navMenu) {
        navMenu.classList.remove("active");
        if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      }
    },
    { passive: true }
  );

  setActive(); // initial
});

// === Testimonials Carousel ===
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector(".dots");
const dots = Array.from(dotsNav.children);

if (track && dots.length > 0) {
  // Function to move to a given slide
  const moveToSlide = (targetIndex) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;

    // update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === targetIndex);
    });
  };

  // Attach click events on dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      moveToSlide(index);
    });
  });
}


// --- Smooth scrolling for nav links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      window.scrollTo({top: targetEl.offsetTop - 60, behavior: 'smooth'});
    }
  });
});

// --- Mobile nav toggle with animation ---
const navBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navBtn && navLinks) {
  navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navBtn.classList.toggle('active');
  });
}
