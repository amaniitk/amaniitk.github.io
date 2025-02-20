document.addEventListener('DOMContentLoaded', () => {
  // Stellar Particle Effect with Hover Interaction
  particlesJS('particles-js', {
    particles: {
      number: { value: 300, density: { enable: true, value_area: 800 } }, // More stars for density
      color: { value: '#7c4dff' }, // Purple stars
      shape: { type: 'star' }, // Star-shaped particles
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 100, // Closer lines for more connections
        color: '#7c4dff', 
        opacity: 0.6, 
        width: 1 
      }, // Interconnected lines
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
        onhover: { enable: true, mode: 'grab' }, // Connects to mouse on hover
        onclick: { enable: true, mode: 'push' }, 
        resize: true 
      },
      modes: { 
        grab: { distance: 150, line_linked: { opacity: 0.8 } }, // Stronger hover lines
        push: { particles_nb: 4 }
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
      setTimeout(type, 100);
    }
  }

  type();
});
