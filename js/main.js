document.addEventListener('DOMContentLoaded', () => {
  // **Typewriter Effect**
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

  // **Scroll Animations**
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add('hidden');
    observer.observe(section);
  });

  // **Particle Effect with Hover Interaction**
  particlesJS('particles-js', {
    particles: {
      number: { value: 100 },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: '#ffffff', 
        opacity: 0.4, 
        width: 1 
      },
      move: { 
        enable: true, 
        speed: 2, 
        direction: 'none', 
        random: false, 
        straight: false, 
        out_mode: 'out', 
        bounce: false 
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
        grab: { 
          distance: 200, 
          line_linked: { opacity: 1 } 
        },
        push: { particles_nb: 4 }
      }
    }
  });
});
