// document.addEventListener('DOMContentLoaded', () => {

//   if (document.querySelector('#particles-js')) {
//     particlesJS('particles-js', {
//       particles: {
//         number: { value: 300, density: { enable: true, value_area: 800 } },
//         color: { value: ['#ffffff', '#7c4dff'] },
//         shape: { type: 'circle' },
//         opacity: { value: 0.7, random: true },
//         size: { value: 2.5, random: true },
//         line_linked: {
//           enable: true,
//           distance: 100,
//           color: '#7c4dff',
//           opacity: 0.6,
//           width: 1
//         },
//         move: {
//           enable: true,
//           speed: 1.5,
//           direction: 'none',
//           random: true,
//           straight: false,
//           out_mode: 'out'
//         }
//       },
//       interactivity: {
//         detect_on: 'canvas',
//         events: {
//           onhover: { enable: true, mode: 'grab' },
//           onclick: { enable: true, mode: 'push' },
//           resize: true
//         },
//         modes: {
//           grab: { distance: 140, line_linked: { opacity: 1 } },
//           push: { particles_nb: 5 }
//         }
//       },
//       retina_detect: true
//     });
//   }

 
//   if (document.querySelector('#hero')) {
//     // Typewriter Effect for Tagline
//     const tagline = document.getElementById('tagline');
//     if (tagline) {
//       const text = 'Fourth Year Undergraduate at IIT Kanpur';
//       let index = 0;
//       function type() {
//         if (index < text.length) {
//           tagline.textContent += text.charAt(index);
//           index++;
//           setTimeout(type, 40);
//         }
//       }
//       type();
//     }

//     // GSAP Animations for Hero
//     gsap.from('.title', {
//       duration: 1.5,
//       y: -50,
//       opacity: 0,
//       ease: 'power3.out'
//     });
//     gsap.from('.tagline', {
//       duration: 1,
//       y: 30,
//       opacity: 0,
//       delay: 0.5,
//       ease: 'power2.out'
//     });
//     gsap.from('.button', {
//       duration: 1,
//       scale: 0,
//       opacity: 0,
//       stagger: 0.2,
//       delay: 1,
//       ease: 'back.out'
//     });
//     gsap.from('.nav-button', {
//       duration: 1,
//       x: 50,
//       opacity: 0,
//       stagger: 0.1,
//       delay: 1.2,
//       ease: 'power2.out'
//     });

//     // Parallax Effect on Mouse Move
//     const heroContent = document.querySelector('.hero-content');
//     if (heroContent) {
//       document.addEventListener('mousemove', (e) => {
//         const x = (window.innerWidth - e.pageX * 2) / 90;
//         const y = (window.innerHeight - e.pageY * 2) / 90;
//         gsap.to(heroContent, {
//           duration: 0.5,
//           x: x,
//           y: y,
//           ease: 'power2.out'
//         });
//       });
//     }

//     const scrollDown = document.querySelector('.scroll-down');
//     if (scrollDown) {
//       scrollDown.addEventListener('click', () => {
//         const aboutSection = document.getElementById('about');
//         if (aboutSection) {
//           aboutSection.scrollIntoView({ behavior: 'smooth' });
//         }
//       });
//     }
//   }

  
//   if (document.querySelector('#about')) {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.from('#about .content', {
//       scrollTrigger: {
//         trigger: '#about',
//         start: 'top 80%'
//       },
//       opacity: 0,
//       y: 40,
//       duration: 1.2,
//       ease: 'power2.out'
//     });
//   }

 
//   if (document.querySelector('#blog')) {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate the blog title and intro text
//     gsap.from('.blog-title', {
//       duration: 1.5,
//       y: -40,
//       opacity: 0,
//       ease: 'power3.out'
//     });
//     gsap.from('.intro-text', {
//       duration: 1,
//       x: -40,
//       opacity: 0,
//       delay: 0.5,
//       ease: 'power2.out'
//     });
//     gsap.from('.blog-card', {
//       duration: 1,
//       y: 50,
//       opacity: 0,
//       stagger: 0.2,
//       delay: 0.8,
//       ease: 'power2.out'
//     });

   
//     const readMoreButtons = document.querySelectorAll('.read-more');
//     readMoreButtons.forEach((button) => {
//       button.addEventListener('click', () => {
//         const cardFull = button.previousElementSibling; // .card-full
//         cardFull.classList.toggle('hidden');
//         if (cardFull.classList.contains('hidden')) {
//           button.textContent = 'Read More';
//         } else {
//           button.textContent = 'Show Less';
//         }
//       });
//     });
//   }

 
//   if (document.querySelector('#contact')) {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from('.contact-title', {
//       duration: 1.5,
//       y: -40,
//       opacity: 0,
//       ease: 'power3.out'
//     });
//     gsap.from('.contact-form', {
//       duration: 1,
//       y: 40,
//       opacity: 0,
//       delay: 0.5,
//       ease: 'power2.out'
//     });
//   }
// });


// Handle loading screen
window.addEventListener('load', () => {
  // Hide loading screen
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
});

// Simulate loading progress before window load event
document.addEventListener('DOMContentLoaded', () => {
  // Show loading progress
  let progress = 0;
  const loadingPercentage = document.getElementById('loading-percentage');
  const loadingBarFill = document.getElementById('loading-bar-fill');
  
  if (loadingPercentage && loadingBarFill) {
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) progress = 100;
      
      loadingPercentage.textContent = `${Math.floor(progress)}%`;
      loadingBarFill.style.width = `${progress}%`;
      
      if (progress === 100) clearInterval(interval);
    }, 200);
  }

  // ----------------------------------------------------
  // 1) PARTICLES BACKGROUND - Optimized configuration
  // ----------------------------------------------------
  if (document.querySelector('#particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } }, // Reduced from 300
        color: { value: ['#ffffff', '#7c4dff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#7c4dff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1, // Reduced from 1.5
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
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 3 } // Reduced from 5
        }
      },
      retina_detect: true
    });
  }

  // ----------------------------------------------------
  // 2) INDEX PAGE (if #hero is present)
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
          setTimeout(type, 40);
        }
      }
      // Delay typewriter effect for loading
      setTimeout(type, 800);
    }

    // GSAP Animations for Hero - More efficient animations
    gsap.from('.title', {
      duration: 1,
      y: -30,
      opacity: 0,
      ease: 'power3.out',
      delay: 0.5
    });
    gsap.from('.tagline', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 1,
      ease: 'power2.out'
    });
    gsap.from('.button', {
      duration: 0.8,
      scale: 0.9,
      opacity: 0,
      stagger: 0.2,
      delay: 1.2,
      ease: 'back.out'
    });
    gsap.from('.nav-button', {
      duration: 0.8,
      x: 30,
      opacity: 0,
      stagger: 0.1,
      delay: 1.5,
      ease: 'power2.out'
    });

    // Optimized Parallax Effect on Mouse Move
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      // Throttle function to limit the frequency of mousemove event handling
      let ticking = false;
      document.addEventListener('mousemove', (e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const x = (window.innerWidth - e.pageX * 2) / 120; // Reduced movement factor
            const y = (window.innerHeight - e.pageY * 2) / 120;
            gsap.to(heroContent, {
              duration: 0.8,
              x: x,
              y: y,
              ease: 'power2.out'
            });
            ticking = false;
          });
          ticking = true;
        }
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
  // 3) ABOUT SECTION ANIMATION
  // ----------------------------------------------------
  if (document.querySelector('#about')) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#about .content', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // ----------------------------------------------------
  // 4) BLOG PAGE (if #blog is present)
  // ----------------------------------------------------
  if (document.querySelector('#blog')) {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the blog title and intro text
    gsap.from('.blog-title', {
      duration: 1,
      y: -30,
      opacity: 0,
      delay: 0.5,
      ease: 'power3.out'
    });
    gsap.from('.intro-text', {
      duration: 0.8,
      y: -20,
      opacity: 0,
      delay: 0.8,
      ease: 'power2.out'
    });
    gsap.from('.blog-card', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 1,
      ease: 'power2.out'
    });

    // Read More toggle
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
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.contact-title', {
      duration: 1,
      y: -30,
      opacity: 0,
      delay: 0.5,
      ease: 'power3.out'
    });
    gsap.from('.contact-form', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.8,
      ease: 'power2.out'
    });
  }
});
