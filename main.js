// Typing Effect

const textElement = document.getElementById("typing-text");

const texts = [
    "Professional Web Developer",
    "SEO Specialist",
    "Business Website Expert",
    "Freelance Digital Consultant"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {
        textElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        textElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            Number(counter.getAttribute("data-target"));

        const count =
            Number(counter.innerText);

        const increment = target / 100;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});


// Testimonial Slider

const testimonials =
    document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function changeTestimonial() {

    testimonials.forEach(item =>
        item.classList.remove("active")
    );

    testimonials[currentTestimonial]
        .classList.add("active");

    currentTestimonial++;

    if (
        currentTestimonial >= testimonials.length
    ) {
        currentTestimonial = 0;
    }
}

setInterval(changeTestimonial, 3000);