document.addEventListener('DOMContentLoaded', () => {
  // Particle Effect with Mouse Interaction
  particlesJS('particles-js', {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } }, // More particles for a stellar look
      color: { value: '#7c4dff' }, // Purple stars
      shape: { type: 'star' }, // Star-shaped particles for a stellar vibe
      opacity: { value: 0.7, random: true },
      size: { value: 4, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: '#7c4dff', 
        opacity: 0.4, 
        width: 1 
      }, // Lines connect particles
      move: { 
        enable: true, 
        speed: 3, 
        direction: 'none', 
        random: true, 
        straight: false, 
        out_mode: 'out' 
      }
    },
    interactivity: {
      detect_on: 'canvas', // Detects mouse over the entire canvas
      events: { 
        onhover: { enable: true, mode: 'grab' }, // Particles connect to mouse on hover
        onclick: { enable: true, mode: 'push' }, // Optional: adds particles on click
        resize: true 
      },
      modes: { 
        grab: { distance: 200, line_linked: { opacity: 0.7 } }, // Lines connect within 200px
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true // Improves visuals on high-res screens
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
