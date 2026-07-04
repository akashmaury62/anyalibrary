// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// ===============================
// Gallery Lightbox
// ===============================

const images = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

images.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});


// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-animation");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden-animation");

    observer.observe(section);

});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
