// Functionality For Product Page Rounded Cards Hover
document.querySelectorAll('.web-rounded-card').forEach((card, index) => {
    let img = card.querySelector('img');
    let originalSrc = `assets/images/rounded-cards/landscape/rounded-card-${index + 1}.webp`;
    let hoverSrc = `assets/images/rounded-cards/landscape/rounded-card-${index + 1}-light.webp`;
  
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
    let originalSrc = `assets/images/rounded-cards/landscape/rounded-card-${index + 1}.webp`;
    let hoverSrc = `assets/images/rounded-cards/landscape/rounded-card-${index + 1}-light.webp`;
  
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
    let originalSrc = `assets/images/product-slider/landscape/product-slide-${index + 1}.webp`;
    let hoverSrc = `assets/images/product-slider/landscape/product-slide-${index + 1}-light.webp`;
  
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
    let originalSrc = `assets/images/product-slider/landscape/product-slide-${index + 1}.webp`;
    let hoverSrc = `assets/images/product-slider/landscape/product-slide-${index + 1}-light.webp`;
  
    img.addEventListener('mouseenter', () => {
        img.setAttribute('src', hoverSrc);
    });
  
    img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalSrc);
    });
  });