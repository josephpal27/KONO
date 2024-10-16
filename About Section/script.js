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