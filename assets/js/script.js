// Functionality For Banner Slider

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const slides = document.querySelectorAll(".banner-slider .slide");
  const totalSlides = slides.length;
  const intervalTime = 5000; // Time in milliseconds for automatic slide transition

  function showSlide(slideNumber) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("show");
    });

    // Show the current slide
    document.getElementById(`slide-${slideNumber}`).classList.add("show");
  }

  function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = ((currentSlide - 2 + totalSlides) % totalSlides) + 1;
    showSlide(currentSlide);
  }

  // Show the first slide initially
  showSlide(currentSlide);

  // Add event listeners to buttons
  document
    .querySelector(".slider-btn.next")
    .addEventListener("click", nextSlide);
  document
    .querySelector(".slider-btn.prev")
    .addEventListener("click", prevSlide);

  // Automatic slide transition
  setInterval(nextSlide, intervalTime);
});



let slideImgBox = document.querySelectorAll(".slide-image");
let slideImg = document.querySelectorAll(".slide-image img");

slideImgBox.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    slideImg.forEach((img) => {
      img.style.filter = "grayscale(0)";
    });
  });
});

slideImgBox.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    slideImg.forEach((img) => {
      img.style.filter = "grayscale(100%)";
    });
  });
});

document.querySelector(".slider-btn.next").addEventListener("mouseenter", () => {
    slideImg.forEach((img) => {
      img.style.filter = "grayscale(0)";
    });
  });

document.querySelector(".slider-btn.prev").addEventListener("mouseenter", () => {
    slideImg.forEach((img) => {
      img.style.filter = "grayscale(0)";
    });
  });

// ---------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Cards Hover Effect
let card = document.querySelectorAll(".expert-card");
let layer = document.querySelectorAll(".card-count .layer");

card.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    layer[index].style.width = "100%";
  });
});
card.forEach((card, index) => {
  card.addEventListener("mouseleave", () => {
    layer[index].style.width = "0";
  });
});

// ---------------------------------------------------------------------------------------------------------------------------------------

// Functionality For About Us Content Toggle

document.querySelectorAll(".content-menu .menu").forEach((menu) => {
  menu.addEventListener("click", function () {
    // Remove the 'active' class from all menu items
    document
      .querySelectorAll(".content-menu .menu")
      .forEach((item) => item.classList.remove("active"));

    // Add the 'active' class to the clicked menu item
    this.classList.add("active");

    // Hide all content sections
    document
      .querySelectorAll(".content-text")
      .forEach((content) => content.classList.remove("active"));

    // Show the corresponding content section
    const target = this.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});

// ---------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   let currentSlide = 1;
//   const totalSlides = document.querySelectorAll('.banner-slider .slide').length;

//   function showSlide(slideNumber) {
//       // Hide all slides
//       document.querySelectorAll('.banner-slider .slide').forEach(slide => {
//           slide.style.display = 'none';
//       });

//       // Show the current slide
//       document.getElementById(`slide-${slideNumber}`).style.display = 'flex';
//   }

//   function nextSlide() {
//       currentSlide = (currentSlide % totalSlides) + 1;
//       showSlide(currentSlide);
//   }

//   function prevSlide() {
//       currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
//       showSlide(currentSlide);
//   }

//   // Show the first slide initially
//   showSlide(currentSlide);

//   // Add event listeners to buttons
//   document.querySelector('.slider-btn.next').addEventListener('click', nextSlide);
//   document.querySelector('.slider-btn.prev').addEventListener('click', prevSlide);
// });
