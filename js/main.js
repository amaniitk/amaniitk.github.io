document.addEventListener('DOMContentLoaded', () => {
  // Particle Effect (Subtle for Blog Page)
  particlesJS('particles-js', {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#7c4dff' },
      shape: { type: 'star' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: false },
      move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { repulse: { distance: 100 }, push: { particles_nb: 2 } }
    }
  });

  // Typewriter Effect for Intro Text
  const introText = document.querySelector('.intro-text');
  const text = 'Dive into my mind—where chaos meets clarity.';
  let index = 0;

  function type() {
    if (index < text.length) {
      introText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  introText.textContent = '';
  type();

  // GSAP Animations
  gsap.from('.blog-title', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
  gsap.from('.blog-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 0.5 });

  // Interactive Blog Cards
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach(card => {
    const fullContent = card.querySelector('.card-full');
    const readMoreBtn = card.querySelector('.read-more');

    readMoreBtn.addEventListener('click', () => {
      if (fullContent.classList.contains('hidden')) {
        fullContent.classList.remove('hidden');
        gsap.fromTo(fullContent, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5 });
        readMoreBtn.textContent = 'Read Less';
      } else {
        gsap.to(fullContent, { height: 0, opacity: 0, duration: 0.5, onComplete: () => fullContent.classList.add('hidden') });
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
});
