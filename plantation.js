// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select all elements with the class 'nav-link'
  const navLinks = document.querySelectorAll('.nav-link');

  // Loop through each nav-link element
  navLinks.forEach(function(link) {
      // Add a click event listener to each link
      link.addEventListener('click', function() {
          // Get the target page from the data-target attribute
          const targetPage = this.getAttribute('data-target');
          // Navigate to the target page
          window.location.href = targetPage;
      });
  });
});
