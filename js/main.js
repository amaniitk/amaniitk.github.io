document.addEventListener('DOMContentLoaded', () => {
  // Stellar Particle Effect with Dense, Interconnected Stars and Hover Interaction
  particlesJS('particles-js', {
    particles: {
      number: { value: 500, density: { enable: true, value_area: 800 } }, // Denser stellar field
      color: { value: '#7c4dff' }, // Purple stars
      shape: { type: 'star' }, // Star-shaped particles
      opacity: { value: 0.9, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 80, // Closer lines for more connections
        color: '#7c4dff', 
        opacity: 0.8, 
        width: 1 
      }, // Bright, interconnected lines
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
        onhover: { enable: true, mode: 'grab' }, // Connects strongly to mouse
        onclick: { enable: true, mode: 'push' }, 
        resize: true 
      },
      modes: { 
        grab: { distance: 150, line_linked: { opacity: 1 } }, // Strong, visible lines on hover
        push: { particles_nb: 10 }
      }
    },
    retina_detect: true
  });

  // Typewriter Effect for Tagline
  const tagline = document.getElementById('tagline');
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

  // GSAP Animations for Smooth Entrance
  gsap.from('.title', { duration: 1.5, y: -100, opacity: 0, ease: 'power3.out' });
  gsap.from('.tagline', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power2.out' });
  gsap.from('.button', { duration: 1, scale: 0, opacity: 0, stagger: 0.2, delay: 1, ease: 'back.out' });
  gsap.from('.nav-button', { duration: 1, x: 50, opacity: 0, stagger: 0.1, delay: 1.2, ease: 'power2.out' });
});
