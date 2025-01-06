// Functionality For Product Page Rounded Cards Hover
document.querySelectorAll('.web-rounded-card').forEach((card, index) => {
    let img = card.querySelector('img');
    let originalSrc = `assets/images/rounded-cards/bollards/rounded-card-${index + 1}.jpg`;
    let hoverSrc = `assets/images/rounded-cards/bollards/rounded-card-${index + 1}-light.jpg`;
  
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
    });
  
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalSrc);
    });
  });
  
  // Functionality For Product Page Rounded Cards Hover on MOBILE SCREEN
  document.querySelectorAll('.mobile-rounded-card').forEach((card, index) => {
    let img = card.querySelector('img');
    let originalSrc = `assets/images/rounded-cards/bollards/rounded-card-${index + 1}.jpg`;
    let hoverSrc = `assets/images/rounded-cards/bollards/rounded-card-${index + 1}-light.jpg`;
  
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
    });
  
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalSrc);
    });
  });
  
  // ---------------------------------------------------------------------------------------------------------------------------------------
  
  // Functionality For Product Page Cards Slider Hover
  document.querySelectorAll('.web-slider-container .card').forEach((card, index) => {
    let img = card.querySelector('img');
    let originalSrc = `assets/images/product-slider/bollards/product-slide-${index + 1}.jpg`;
    let hoverSrc = `assets/images/product-slider/bollards/product-slide-${index + 1}-light.jpg`;
  
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
    });
  
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalSrc);
    });
  });
  
  // Functionality For Product Page Cards Slider Hover on MOBILE SCREENS
  document.querySelectorAll('.mobile-slider-container .card').forEach((card, index) => {
    let img = card.querySelector('img');
    let originalSrc = `assets/images/product-slider/bollards/product-slide-${index + 1}.jpg`;
    let hoverSrc = `assets/images/product-slider/bollards/product-slide-${index + 1}-light.jpg`;
  
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
    });
  
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalSrc);
    });
  });