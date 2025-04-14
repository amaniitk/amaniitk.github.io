// Wait until DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {

  /* Smooth Scrolling for Navigation Links */
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substr(1);
      const targetSection = document.getElementById(targetId);
      if(targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, // Adjust offset for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  /* Custom Cursor Logic */
  const customCursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // Optional: Add effects when hovering over interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .project-item');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      customCursor.style.transform += ' scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      customCursor.style.transform = customCursor.style.transform.replace(' scale(1.5)', '');
    });
  });

  /* Project Filtering */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and add to current button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      projectItems.forEach(item => {
        // Show all if filter is "all"
        if (filter === "all" || item.getAttribute('data-category') === filter) {
          item.style.display = "block";
          // Animate items in using GSAP
          gsap.fromTo(item, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  /* Form Validation */
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = "");

    // Validate Name
    const nameField = document.getElementById('name');
    if (nameField.value.trim() === "") {
      document.getElementById('error-name').textContent = "Name is required";
      valid = false;
    }
    
    // Validate Email
    const emailField = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
      document.getElementById('error-email').textContent = "Email is required";
      valid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
      document.getElementById('error-email').textContent = "Please enter a valid email";
      valid = false;
    }
    
    // Validate Message
    const messageField = document.getElementById('message');
    if (messageField.value.trim() === "") {
      document.getElementById('error-message').textContent = "Message cannot be empty";
      valid = false;
    }
    
    if (valid) {
      // If all validations pass, display a success message (or proceed with AJAX submission)
      document.getElementById('form-success').textContent = "Thank you for your message!";
      contactForm.reset();
      // Optionally, fade out the success message after a few seconds
      setTimeout(() => {
        document.getElementById('form-success').textContent = "";
      }, 5000);
    }
  });
});

