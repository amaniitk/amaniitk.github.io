// particlesJS('particles-js', {
//   particles: {
//     number: { value: 150 },
//     color: { value: '#7c4dff' },
//     shape: { type: 'circle' },
//     opacity: { value: 0.7, random: true },
//     size: { value: 4, random: true },
//     line_linked: { enable: true, distance: 150, color: '#7c4dff', opacity: 0.4 },
//     move: { enable: true, speed: 6, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
//   },
//   interactivity: {
//     detect_on: 'canvas',
//     events: { 
//       onhover: { enable: true, mode: 'grab' }, // Particles connect to mouse on hover
//       onclick: { enable: true, mode: 'push' }, // Optional: adds particles on click
//       resize: true 
//     },
//     modes: { 
//       grab: { distance: 200, line_linked: { opacity: 0.7 } }, // Lines connect to mouse
//       push: { particles_nb: 4 } 
//     }
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  // Typewriter Effect
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

  // Scroll Animations
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
});
