/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});

/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 200;

    const sectionHeight =
      section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove(
      "active-link"
    );

    if (
      link.getAttribute("href") ===
      "#" + currentSection
    ) {

      link.classList.add(
        "active-link"
      );

    }

  });

});

/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements =
  document.querySelectorAll(
    ".service-card, .project-card, .testimonial, .step, .about-card, .stat-card, .experience-item"
  );

const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "show"
          );

        }

      });

    },

    {
      threshold: 0.15
    }

  );

revealElements.forEach(el => {

  el.classList.add(
    "hidden-element"
  );

  revealObserver.observe(el);

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
  document.querySelectorAll(
    ".stat-card h3"
  );

const counterObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {

          animateCounter(
            entry.target
          );

          entry.target.classList.add(
            "counted"
          );

        }

      });

    },

    {
      threshold: 0.5
    }

  );

counters.forEach(counter => {

  counterObserver.observe(
    counter
  );

});

function animateCounter(element) {

  const finalText =
    element.innerText;

  const target =
    parseInt(finalText);

  if (isNaN(target)) return;

  let current = 0;

  const increment =
    target / 50;

  const timer =
    setInterval(() => {

      current += increment;

      if (current >= target) {

        current = target;

        clearInterval(timer);

      }

      element.innerText =
        Math.floor(current) +
        (finalText.includes("+")
          ? "+"
          : "");

    }, 25);

}

/* ==========================================
   PROJECT FILTER
========================================== */

const filterButtons =
  document.querySelectorAll(
    ".project-filter button"
  );

const projectCards =
  document.querySelectorAll(
    ".project-card"
  );

filterButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      filterButtons.forEach(btn => {

        btn.classList.remove(
          "active"
        );

      });

      button.classList.add(
        "active"
      );

      const filter =
        button.dataset.filter;

      projectCards.forEach(card => {

        const category =
          card.dataset.category;

        if (
          filter === "all" ||
          category === filter
        ) {

          card.classList.remove(
            "hide"
          );

        } else {

          card.classList.add(
            "hide"
          );

        }

      });

    }
  );

});

/* ==========================================
   FLOATING HERO CARD
========================================== */

const floatingCard =
  document.querySelector(
    ".floating-card"
  );

if (floatingCard) {

  let move = 0;

  setInterval(() => {

    move =
      move === 0 ? 10 : 0;

    floatingCard.style.transform =
      `translateY(${move}px)`;

  }, 1500);

}

/* ==========================================
   DESIGN COUNTER
========================================== */

window.addEventListener(
  "load",
  () => {

    const designCounter =
      document.getElementById(
        "designCounter"
      );

    if (!designCounter) return;

    let count = 0;

    const target = 10;

    const timer =
      setInterval(() => {

        count++;

        designCounter.textContent =
          count + "+";

        if (count >= target) {

          clearInterval(timer);

        }

      }, 120);

  }
);

/* ==========================================
   PARALLAX HERO IMAGE
========================================== */

const heroImage =
  document.querySelector(
    ".hero-image img"
  );

window.addEventListener(
  "scroll",
  () => {

    if (!heroImage) return;

    const scroll =
      window.scrollY;

    heroImage.style.transform =
      `translateY(${scroll * 0.05}px)`;

  }
);

/* ==========================================
   NAVBAR SHADOW
========================================== */

const navbar =
  document.querySelector(
    ".navbar"
  );

window.addEventListener(
  "scroll",
  () => {

    if (!navbar) return;

    navbar.style.boxShadow =
      window.scrollY > 50
        ? "0 10px 30px rgba(0,0,0,.08)"
        : "none";

  }
);

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const subtitle =
  document.querySelector(
    ".job-title"
  );

if (subtitle) {

  const text =
    subtitle.textContent;

  subtitle.textContent = "";

  let index = 0;

  function typeWriter() {

    if (
      index < text.length
    ) {

      subtitle.textContent +=
        text.charAt(index);

      index++;

      setTimeout(
        typeWriter,
        40
      );

    }

  }

  window.addEventListener(
    "load",
    typeWriter
  );

}

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

const buttons =
  document.querySelectorAll(
    ".primary-btn, .resume-btn, .secondary-btn"
  );

buttons.forEach(btn => {

  btn.addEventListener(
    "mouseenter",
    () => {

      btn.style.transform =
        "translateY(-3px)";

    }
  );

  btn.addEventListener(
    "mouseleave",
    () => {

      btn.style.transform =
        "translateY(0)";

    }
  );

});

/* ==========================================
   GLOBAL ANIMATION CSS
========================================== */

const style =
  document.createElement(
    "style"
  );

style.innerHTML = `

.hidden-element{
  opacity:0;
  transform:translateY(40px);
  transition:all .8s ease;
}

.show{
  opacity:1;
  transform:translateY(0);
}

.active-link{
  color:#4f46e5 !important;
  font-weight:700;
}

.project-card.hide{
  display:none;
}

`;

document.head.appendChild(
  style
);

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener(
  "load",
  () => {

    document.body.classList.add(
      "loaded"
    );

    console.log(
      "Portfolio Loaded Successfully 🚀"
    );

  }
);