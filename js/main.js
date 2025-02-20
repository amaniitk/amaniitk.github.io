document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1) PARTICLES BACKGROUND (applies to all pages that have #particles-js)
  // ----------------------------------------------------
  if (document.querySelector('#particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 500, density: { enable: true, value_area: 800 } },
        color: { value: '#7c4dff' },
        shape: { type: 'star' },
        opacity: { value: 0.9, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 80,
          color: '#7c4dff',
          opacity: 0.8,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 1 } },
          push: { particles_nb: 10 }
        }
      },
      retina_detect: true
    });
  }

  // ----------------------------------------------------
  // 2) INDEX PAGE / HERO SECTION (if #hero is present)
  // ----------------------------------------------------
  if (document.querySelector('#hero')) {
    // Typewriter Effect for Tagline
    const tagline = document.getElementById('tagline');
    if (tagline) {
      const text = 'Fourth Year Undergraduate at IIT Kanpur';
      let index = 0;

      function type() {
        if (index < text.length) {
          tagline.textContent += text.charAt(index);
          index++;
          setTimeout(type, 50);
        }
      }
      type();
    }

    // GSAP Animations for Hero
    gsap.from('.title', {
      duration: 1.5,
      y: -100,
      opacity: 0,
      ease: 'power3.out'
    });
    gsap.from('.tagline', {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
    gsap.from('.button', {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      delay: 1,
      ease: 'back.out'
    });
    gsap.from('.nav-button', {
      duration: 1,
      x: 50,
      opacity: 0,
      stagger: 0.1,
      delay: 1.2,
      ease: 'power2.out'
    });

    // Parallax Effect on Mouse Move
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        gsap.to(heroContent, {
          duration: 0.5,
          x: x,
          y: y,
          ease: 'power2.out'
        });
      });
    }

    // Scroll Down Arrow -> Scroll to #about
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
      scrollDown.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // ----------------------------------------------------
  // 3) ABOUT SECTION (ScrollTrigger Animation)
  // ----------------------------------------------------
  if (document.querySelector('#about')) {
    gsap.from('#about .content', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out'
    });
  }

  // ----------------------------------------------------
  // 4) BLOG PAGE (if #blog is present)
  // ----------------------------------------------------
  if (document.querySelector('#blog')) {
    // GSAP Animations for Blog Title and Cards
    gsap.from('.blog-title', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'power3.out'
    });
    gsap.from('.intro-text', {
      duration: 1,
      x: -50,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
    gsap.from('.blog-card', {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 0.8,
      ease: 'power2.out'
    });

    // Read More Toggle Functionality
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const cardFull = button.previousElementSibling; // .card-full
        cardFull.classList.toggle('hidden');
        if (cardFull.classList.contains('hidden')) {
          button.textContent = 'Read More';
        } else {
          button.textContent = 'Show Less';
        }
      });
    });
  }

  // ----------------------------------------------------
  // 5) CONTACT PAGE (if #contact is present)
  // ----------------------------------------------------
  if (document.querySelector('#contact')) {
    // GSAP Animations for Contact Title and Form
    gsap.from('.contact-title', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'power3.out'
    });
    gsap.from('.contact-form', {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
  }
});
