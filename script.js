/* =========================================
   EMMATRON AI LABS
   Interactive Website Functionality
========================================= */


/* =========================================
   1. CURRENT YEAR
========================================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   2. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    // Close menu when a navigation link is clicked

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", event => {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* =========================================
   3. SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


if (prefersReducedMotion) {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

} else if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================
   4. 3D HERO PARALLAX EFFECT
========================================= */

const heroVisual = document.querySelector(".hero-visual");

const aiScene = document.querySelector(".ai-scene");

const supportsHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
).matches;


if (
    heroVisual &&
    aiScene &&
    supportsHover &&
    !prefersReducedMotion
) {

    let animationFrame = null;

    heroVisual.addEventListener("pointermove", event => {

        const rect = heroVisual.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;

        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 12;

        const rotateX = (0.5 - y) * 12;


        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        animationFrame = requestAnimationFrame(() => {

            aiScene.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        });

    });


    heroVisual.addEventListener("pointerleave", () => {

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }

        aiScene.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}


/* =========================================
   5. HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".site-header");

if (header) {

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                if (window.scrollY > 40) {

                    header.classList.add("scrolled");

                } else {

                    header.classList.remove("scrolled");

                }

                ticking = false;

            });

            ticking = true;

        }

    }, { passive: true });

}


/* =========================================
   6. ACTIVE NAVIGATION LINK
========================================= */

const pageSections = document.querySelectorAll("main section[id]");

const navItems = document.querySelectorAll(
    "#navLinks a[href^='#']"
);


if ("IntersectionObserver" in window && pageSections.length) {

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const sectionId = entry.target.id;

                    navItems.forEach(link => {

                        const isActive =
                            link.getAttribute("href") === `#${sectionId}`;

                        link.classList.toggle("active", isActive);

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


    pageSections.forEach(section => {

        sectionObserver.observe(section);

    });

}


/* =========================================
   7. INITIALIZATION
========================================= */

console.log(
    "EMMATRON AI LABS | Systems initialized."
);
// Publications – Selar Ebook Link
document.addEventListener("DOMContentLoaded", () => {
    const publicationButton = document.querySelector(
        ".publication-button"
    );

    if (publicationButton) {
        publicationButton.addEventListener("click", (event) => {
            event.preventDefault();

            window.open(
                "https://selar.com/f38627xp65",
                "_blank",
                "noopener,noreferrer"
            );
        });
    }
});
// Publications – Selar Ebook Link
document.addEventListener("DOMContentLoaded", () => {
    const publicationButton = document.querySelector(
        ".publication-button"
    );

    if (publicationButton) {
        publicationButton.addEventListener("click", (event) => {
            event.preventDefault();

            window.open(
                "https://selar.com/f38627xp65",
                "_blank",
                "noopener,noreferrer"
            );
        });
    }
});
