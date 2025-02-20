// Particle Background
particlesJS('particles-js', {
  particles: {
    number: { value: 120 },
    color: { value: '#7c4dff' },
    shape: { type: 'circle' },
    opacity: { value: 0.7 },
    size: { value: 4, random: true },
    line_linked: { enable: true, distance: 150, color: '#7c4dff', opacity: 0.4 },
    move: { enable: true, speed: 4 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
    modes: { grab: { distance: 200 }, push: { particles_nb: 5 } }
  }
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
  const tagline = document.getElementById('tagline');
  const text = 'Fourth Year Undergraduate at IIT Kanpur';
  let index = 0;

  function type() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  type();

  // Scroll Animations
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
});
