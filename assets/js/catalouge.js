
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
  
  // Perform the Web3Forms submission via fetch
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        // Show or download the PDF file after successful submission
        window.open('assets/pdf/KONO LIGHTING MASTER CATALOUGE 2024.pdf', '_blank'); // Opens the PDF in a new tab
        // or
        // window.location.href = 'path-to-your-pdf-file.pdf'; // Redirects to the PDF file
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch(error => console.error('Error:', error));
});


// ------------------------------------------------------------------------------------------------------------------------------
// Mobile Part
document.getElementById('mobileContactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission
  
  // Perform the Web3Forms submission via fetch
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        // Show or download the PDF file after successful submission
        window.open('assets/pdf/KONO LIGHTING MASTER CATALOUGE 2024.pdf', '_blank'); // Opens the PDF in a new tab
        // or
        // window.location.href = 'path-to-your-pdf-file.pdf'; // Redirects to the PDF file
      } else {
        alert('Form submission failed. Please try again.');
      }
    })
    .catch(error => console.error('Error:', error));
});
