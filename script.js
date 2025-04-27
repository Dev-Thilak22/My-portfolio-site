// typing effect

const words = ["Developer", "Designer", "Freelancer", "Basic Photographer", "Learner..."];
const typingText = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);

  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150); // Typing speed
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100); // Deleting speed
  } else {
    isDeleting = !isDeleting;

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, 800); // Pause between words
  }
}

typeEffect();

// typing effect


// mail
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_pvu1ayz", "template_icubmrm", this).then(
        function (response) {
          alert("Your email has taken off! We’ll be in touch shortly! ✈️📬");
        },
        function (error) {
          alert("Error! Retry or try another way to reach us. 🔄 " + error);
        }
      );
    });

// mail
