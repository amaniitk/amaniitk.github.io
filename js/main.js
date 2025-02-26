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


// window.addEventListener('load', () => {
//   // Hide loading screen
//   const loadingScreen = document.getElementById('loading-screen');
//   if (loadingScreen) {
//     loadingScreen.style.opacity = '0';
//     setTimeout(() => {
//       loadingScreen.style.display = 'none';
//     }, 500);
//   }
// });

// document.addEventListener('DOMContentLoaded', () => {
//   let progress = 0;
//   const loadingPercentage = document.getElementById('loading-percentage');
//   const loadingBarFill = document.getElementById('loading-bar-fill');
  
//   if (loadingPercentage && loadingBarFill) {
//     const interval = setInterval(() => {
//       progress += Math.random() * 10;
//       if (progress > 100) progress = 100;
      
//       loadingPercentage.textContent = `${Math.floor(progress)}%`;
//       loadingBarFill.style.width = `${progress}%`;
      
//       if (progress === 100) clearInterval(interval);
//     }, 200);
//   }

 
//   if (document.querySelector('#particles-js')) {
//     particlesJS('particles-js', {
//       particles: {
//         number: { value: 80, density: { enable: true, value_area: 800 } }, // Reduced from 300
//         color: { value: ['#ffffff', '#7c4dff'] },
//         shape: { type: 'circle' },
//         opacity: { value: 0.5, random: true },
//         size: { value: 2, random: true },
//         line_linked: {
//           enable: true,
//           distance: 150,
//           color: '#7c4dff',
//           opacity: 0.4,
//           width: 1
//         },
//         move: {
//           enable: true,
//           speed: 1, // Reduced from 1.5
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
//           push: { particles_nb: 3 } // Reduced from 5
//         }
//       },
//       retina_detect: true
//     });
//   }

 
//   if (document.querySelector('#hero')) {
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
//       setTimeout(type, 800);
//     }

//     gsap.from('.title', {
//       duration: 1,
//       y: -30,
//       opacity: 0,
//       ease: 'power3.out',
//       delay: 0.5
//     });
//     gsap.from('.tagline', {
//       duration: 0.8,
//       y: 20,
//       opacity: 0,
//       delay: 1,
//       ease: 'power2.out'
//     });
//     gsap.from('.button', {
//       duration: 0.8,
//       scale: 0.9,
//       opacity: 0,
//       stagger: 0.2,
//       delay: 1.2,
//       ease: 'back.out'
//     });
//     gsap.from('.nav-button', {
//       duration: 0.8,
//       x: 30,
//       opacity: 0,
//       stagger: 0.1,
//       delay: 1.5,
//       ease: 'power2.out'
//     });

//     const heroContent = document.querySelector('.hero-content');
//     if (heroContent) {
//       let ticking = false;
//       document.addEventListener('mousemove', (e) => {
//         if (!ticking) {
//           window.requestAnimationFrame(() => {
//             const x = (window.innerWidth - e.pageX * 2) / 120; // Reduced movement factor
//             const y = (window.innerHeight - e.pageY * 2) / 120;
//             gsap.to(heroContent, {
//               duration: 0.8,
//               x: x,
//               y: y,
//               ease: 'power2.out'
//             });
//             ticking = false;
//           });
//           ticking = true;
//         }
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
//       y: 30,
//       duration: 0.8,
//       ease: 'power2.out'
//     });
//   }

 
//   if (document.querySelector('#blog')) {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from('.blog-title', {
//       duration: 1,
//       y: -30,
//       opacity: 0,
//       delay: 0.5,
//       ease: 'power3.out'
//     });
//     gsap.from('.intro-text', {
//       duration: 0.8,
//       y: -20,
//       opacity: 0,
//       delay: 0.8,
//       ease: 'power2.out'
//     });
//     gsap.from('.blog-card', {
//       duration: 0.8,
//       y: 30,
//       opacity: 0,
//       stagger: 0.2,
//       delay: 1,
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
//       duration: 1,
//       y: -30,
//       opacity: 0,
//       delay: 0.5,
//       ease: 'power3.out'
//     });
//     gsap.from('.contact-form', {
//       duration: 0.8,
//       y: 30,
//       opacity: 0,
//       delay: 0.8,
//       ease: 'power2.out'
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------
  // 1) PARTICLES BACKGROUND - Optimized for performance
  // ----------------------------------------------------
  if (document.querySelector('#particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } }, // Reduced for better performance
        color: { value: ['#ffffff', '#800020'] }, // Changed secondary color to match button
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 2, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#800020', // Updated to match new theme
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1, // Reduced for smoother performance
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
          push: { particles_nb: 3 } // Lower for better performance
        }
      },
      retina_detect: false // Better performance on high-DPI screens
    });
  }

  // ----------------------------------------------------
  // 2) INDEX PAGE & HERO ANIMATIONS
  // ----------------------------------------------------
  if (document.querySelector('#hero')) {
    // Enhanced Typewriter Effect
    const tagline = document.getElementById('tagline');
    if (tagline) {
      const text = 'Fourth Year Undergraduate at IIT Kanpur';
      let index = 0;
      
      function type() {
        if (index < text.length) {
          tagline.textContent += text.charAt(index);
          index++;
          setTimeout(type, 40);
        } else {
          // Add blinking cursor effect after typing
          setTimeout(() => {
            tagline.innerHTML = tagline.textContent + '<span class="cursor">|</span>';
            setInterval(() => {
              const cursor = document.querySelector('.cursor');
              if (cursor) {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
              }
            }, 500);
          }, 500);
        }
      }
      type();
    }

    // Improved GSAP Animations
    gsap.from('.title', {
      duration: 1.2,
      y: -60,
      opacity: 0,
      ease: 'power3.out'
    });
    
    gsap.from('.tagline', {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
    
    gsap.from('.button', {
      duration: 0.8,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      delay: 1,
      ease: 'back.out(1.7)' // More bouncy effect
    });
    
    gsap.from('.nav-button', {
      duration: 0.8,
      x: 50,
      opacity: 0,
      stagger: 0.1,
      delay: 1.2,
      ease: 'power2.out'
    });

    // Enhanced Parallax with depth for 3D effect
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const title = document.querySelector('.title');
      const taglineEl = document.querySelector('.tagline');
      const buttons = document.querySelector('.button-container');
      
      document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        
        // Different parallax depths for elements
        gsap.to(heroContent, {
          duration: 0.5,
          x: x * 0.5,
          y: y * 0.5,
          ease: 'power1.out'
        });
        
        if (title) {
          gsap.to(title, {
            duration: 0.5,
            x: x * 0.8,
            y: y * 0.8,
            ease: 'power1.out'
          });
        }
        
        if (taglineEl) {
          gsap.to(taglineEl, {
            duration: 0.5,
            x: x * 0.6,
            y: y * 0.6,
            ease: 'power1.out'
          });
        }
        
        if (buttons) {
          gsap.to(buttons, {
            duration: 0.5,
            x: x * 0.4,
            y: y * 0.4,
            ease: 'power1.out'
          });
        }
      });
    }

    // Interactive Scroll Down Arrow
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
      // Add hover effect
      scrollDown.addEventListener('mouseenter', () => {
        gsap.to(scrollDown, {
          duration: 0.3,
          y: 10,
          ease: 'power2.out'
        });
      });
      
      scrollDown.addEventListener('mouseleave', () => {
        gsap.to(scrollDown, {
          duration: 0.3,
          y: 0,
          ease: 'power2.out'
        });
      });
      
      // Scroll functionality
      scrollDown.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // ----------------------------------------------------
  // 3) ABOUT SECTION - Enhanced Animations
  // ----------------------------------------------------
  if (document.querySelector('#about')) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Split text animation for heading
    const aboutHeading = document.querySelector('#about h2');
    if (aboutHeading) {
      const text = aboutHeading.textContent;
      let html = '';
      
      for (let i = 0; i < text.length; i++) {
        html += `<span class="char">${text[i]}</span>`;
      }
      
      aboutHeading.innerHTML = html;
      
      gsap.from('#about .char', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%'
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out'
      });
    }
    
    // Content animation
    gsap.from('#about p', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%'
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out'
    });
  }

  // ----------------------------------------------------
  // 4) BLOG PAGE - Enhanced Interactivity
  // ----------------------------------------------------
  if (document.querySelector('#blog')) {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered entry animations
    gsap.from('.blog-title', {
      duration: 1.2,
      y: -40,
      opacity: 0,
      ease: 'power3.out'
    });
    
    gsap.from('.intro-text', {
      duration: 1,
      x: -40,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
    
    gsap.from('.blog-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      delay: 0.8,
      ease: 'power2.out'
    });

    // Enhanced Read More toggle with smooth animations
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const cardFull = button.previousElementSibling;
        
        if (cardFull.classList.contains('hidden')) {
          // Show content
          cardFull.classList.remove('hidden');
          button.textContent = 'Show Less';
          
          // Animate expansion
          gsap.fromTo(cardFull, 
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
          );
          
        } else {
          // Hide content with animation
          gsap.to(cardFull, {
            height: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              cardFull.classList.add('hidden');
              button.textContent = 'Read More';
            }
          });
        }
      });
    });
    
    // Hover effects for blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -5,
          boxShadow: '0 10px 20px rgba(128, 0, 32, 0.2)',
          background: 'rgba(255, 255, 255, 0.05)'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          boxShadow: 'none',
          background: 'rgba(255, 255, 255, 0.03)'
        });
      });
    });
  }

  // ----------------------------------------------------
  // 5) CONTACT PAGE - Enhanced Animations & Form Interaction
  // ----------------------------------------------------
  if (document.querySelector('#contact')) {
    gsap.registerPlugin(ScrollTrigger);

    // Staggered entry animations
    gsap.from('.contact-title', {
      duration: 1.2,
      y: -40,
      opacity: 0,
      ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
      duration: 1,
      y: 40,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.out'
    });
    
    // Form field animations
    const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea');
    gsap.from(formElements, {
      duration: 0.8,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      delay: 1,
      ease: 'power2.out'
    });
    
    // Interactive form elements
    formElements.forEach(element => {
      // Focus animation
      element.addEventListener('focus', () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1.02,
          boxShadow: '0 0 15px rgba(128, 0, 32, 0.3)'
        });
      });
      
      // Blur animation
      element.addEventListener('blur', () => {
        gsap.to(element, {
          duration: 0.3,
          scale: 1,
          boxShadow: 'none'
        });
      });
    });
    
    // Submit button animation
    const submitButton = document.querySelector('.contact-form .section-button');
    if (submitButton) {
      submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton, {
          duration: 0.3,
          scale: 1.05,
          background: '#800020',
          ease: 'power1.out'
        });
      });
      
      submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton, {
          duration: 0.3,
          scale: 1,
          background: '#1a1a1a',
          ease: 'power1.out'
        });
      });
    }
  }
  
  // ----------------------------------------------------
  // 6) GLOBAL INTERACTIVE ELEMENTS
  // ----------------------------------------------------
  
  // Button hover animations
  const allButtons = document.querySelectorAll('.button, .nav-button, .back-button, .section-button');
  allButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        boxShadow: '0 0 20px rgba(128, 0, 32, 0.7)',
        ease: 'power1.out'
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 0 10px rgba(128, 0, 32, 0.4)',
        ease: 'power1.out'
      });
    });
  });
  
  // Add page transition effects
  const pageLinks = document.querySelectorAll('a[href]:not([target="_blank"])');
  pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Only apply to internal links
      if (href.indexOf('#') !== 0 && href.indexOf('http') !== 0) {
        e.preventDefault();
        
        // Fade out current page
        gsap.to('body', {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            window.location.href = href;
          }
        });
      }
    });
  });
  
  // Fade in page on load
  gsap.from('body', {
    opacity: 0,
    duration: 0.8
  });
});
