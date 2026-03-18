// NAVBAR SCROLL EFFECT
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// TYPING EFFECT
const text = ["Incredible India", "Beautiful Destinations", "Your Dream Journey"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (index >= text.length) index = 0;

    currentText = text[index];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex++);
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex--);
    }

    if (charIndex == currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (charIndex == 0) {
        isDeleting = false;
        index++;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();


// MODAL
function openModal(title, desc, img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = desc;
  document.getElementById("modal-img").src = img;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target == document.getElementById("modal")) {
    closeModal();
  }
};

// SEARCH FILTER
document.getElementById("search").addEventListener("keyup", function () {
  let value = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.getAttribute("data-name");

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// BOOKING MODAL
function openBooking(pkg) {
  document.getElementById("bookingModal").style.display = "block";
  document.getElementById("selectedPackage").textContent = "Package: " + pkg;
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

// CLOSE ON OUTSIDE CLICK
window.addEventListener("click", function(e) {
  const bookingModal = document.getElementById("bookingModal");
  if (e.target === bookingModal) {
    closeBooking();
  }
});

// BOOKING FORM SUBMIT
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Booking Confirmed 🎉");
    closeBooking();
  });
}