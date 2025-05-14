// Event Handling Games
document.getElementById("pop-balloon").addEventListener("click", function () {
  const balloon = document.querySelector(".balloon-animation");
  balloon.style.animation = "pop 0.5s forwards";
  setTimeout(() => {
    balloon.style.display = "none";
    alert("POP! You won 10 tickets!");
  }, 500);
});

// Hover effect - prize reveal
const mysteryBox = document.querySelector(".mystery-box");
mysteryBox.addEventListener("mouseover", function () {
  const prizes = ["🎁", "🎯", "🍭", "🧸", "🏆"];
  document.querySelector(".prize-reveal").textContent = `You won: ${
    prizes[Math.floor(Math.random() * prizes.length)]
  }`;
});

// Keypress detection
const keyInput = document.querySelector("#keypress-booth input");
keyInput.addEventListener("keypress", function (e) {
  const magicReaction = document.querySelector(".magic-reaction");
  magicReaction.textContent = `You pressed: ${e.key}`;
  magicReaction.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
});

// Secret double-click
const secretBooth = document.getElementById("secret-booth");
secretBooth.addEventListener("dblclick", function () {
  this.innerHTML = "<h3>SECRET PRIZE!</h3><p>100 tickets! �̇</p>";
  this.style.background = "gold";
});

// Rainbow button
let isRainbow = false;
let rainbowInterval;
document.getElementById("rainbow-btn").addEventListener("click", function () {
  isRainbow = !isRainbow;

  if (isRainbow) {
    let hue = 0;
    rainbowInterval = setInterval(() => {
      document.body.style.background = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${
        (hue + 30) % 360
      }, 100%, 50%)`;
      hue = (hue + 1) % 360;
    }, 50);
    this.textContent = "🌈 Rainbow Mode ON! 🌈";
  } else {
    clearInterval(rainbowInterval);
    document.body.style.background =
      "linear-gradient(to right, #ff9966, #ff5e62)";
    this.textContent = "Click for Rainbow Mode 🌈";
  }
});

// Form Validation
const form = document.getElementById("ticket-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById("name");
  if (name.value.trim() === "") {
    showError(name, "Name is required!");
    isValid = false;
  } else {
    clearError(name);
  }

  // Email validation
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailRegex.test(email.value)) {
    showError(email, "Please enter a valid email");
    isValid = false;
  } else {
    clearError(email);
  }

  // Password validation
  const password = document.getElementById("password");
  if (password.value.length > 0 && password.value.length < 8) {
    showError(password, "Password must be at least 8 characters");
    isValid = false;
  } else {
    clearError(password);
  }

  if (isValid) {
    alert("🎉 Congratulations! Form submitted successfully!");
    form.reset();
  }
});

// Real-time password strength
document.getElementById("password").addEventListener("input", function (e) {
  const strengthMeter = document.querySelector(".strength-meter");
  const length = e.target.value.length;

  if (length === 0) {
    strengthMeter.style.width = "0%";
    strengthMeter.style.backgroundColor = "transparent";
  } else if (length < 4) {
    strengthMeter.style.width = "25%";
    strengthMeter.style.backgroundColor = "red";
  } else if (length < 8) {
    strengthMeter.style.width = "50%";
    strengthMeter.style.backgroundColor = "orange";
  } else {
    strengthMeter.style.width = "100%";
    strengthMeter.style.backgroundColor = "green";
  }
});

function showError(input, message) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");
  error.textContent = message;
  formGroup.classList.add("error");
}

function clearError(input) {
  const formGroup = input.parentElement;
  const error = formGroup.querySelector(".error-message");
  error.textContent = "";
  formGroup.classList.remove("error");
}




// Image Gallery Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    // Wrap around if at ends
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });
    
    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

// Navigation buttons
document.querySelector('.gallery-prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.gallery-next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Indicator dots
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        showSlide(parseInt(indicator.dataset.index));
    });
});

// Auto-advance slides (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// FAQ Accordion Functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const btn = item.querySelector('.accordion-btn');
    
    btn.addEventListener('click', () => {
        // Close all other items
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Open first FAQ by default
if (accordionItems.length > 0) {
    accordionItems[0].classList.add('active');
}