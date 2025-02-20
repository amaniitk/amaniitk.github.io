// document.addEventListener('DOMContentLoaded', () => {
//   // Particle Effect (Subtle for Blog Page)
//   particlesJS('particles-js', {
//     particles: {
//       number: { value: 50, density: { enable: true, value_area: 800 } },
//       color: { value: '#7c4dff' },
//       shape: { type: 'star' },
//       opacity: { value: 0.5, random: true },
//       size: { value: 3, random: true },
//       line_linked: { enable: false },
//       move: { enable: true, speed: 1, direction: 'none', random: true, straight: false, out_mode: 'out' }
//     },
//     interactivity: {
//       detect_on: 'canvas',
//       events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
//       modes: { repulse: { distance: 100 }, push: { particles_nb: 2 } }
//     }
//   });

//   // Typewriter Effect for Intro Text
//   const introText = document.querySelector('.intro-text');
//   const text = 'Dive into my mind—where chaos meets clarity.';
//   let index = 0;

//   function type() {
//     if (index < text.length) {
//       introText.textContent += text.charAt(index);
//       index++;
//       setTimeout(type, 50);
//     }
//   }
//   introText.textContent = '';
//   type();

//   // GSAP Animations
//   gsap.from('.blog-title', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
//   gsap.from('.blog-card', { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 0.5 });

//   // Interactive Blog Cards
//   const cards = document.querySelectorAll('.blog-card');
//   cards.forEach(card => {
//     const fullContent = card.querySelector('.card-full');
//     const readMoreBtn = card.querySelector('.read-more');

//     readMoreBtn.addEventListener('click', () => {
//       if (fullContent.classList.contains('hidden')) {
//         fullContent.classList.remove('hidden');
//         gsap.fromTo(fullContent, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5 });
//         readMoreBtn.textContent = 'Read Less';
//       } else {
//         gsap.to(fullContent, { height: 0, opacity: 0, duration: 0.5, onComplete: () => fullContent.classList.add('hidden') });
//         readMoreBtn.textContent = 'Read More';
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  // Inject CSS for Stellar Star Effect
  const style = document.createElement('style');
  style.innerHTML = `
    .stellar-star {
      position: absolute;
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: stellarFade 0.5s ease-out forwards;
      mix-blend-mode: screen;
    }
    @keyframes stellarFade {
      0% { transform: scale(1); opacity: 1; }
      100% { transform: scale(2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Particle Effect with Dynamic Mouse Interaction (Bubble Mode for extra flair)
  particlesJS('particles-js', {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: '#7c4dff' },
      shape: { type: 'star' },
      opacity: { value: 0.7, random: true },
      size: { value: 4, random: true },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: '#7c4dff', 
        opacity: 0.4, 
        width: 1 
      },
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
      detect_on: 'canvas',
      events: { 
        onhover: { enable: true, mode: 'bubble' }, // Bubble mode for dynamic interactions on hover
        onclick: { enable: true, mode: 'push' },    // Click to push new particles
        resize: true 
      },
      modes: { 
        bubble: { distance: 200, size: 8, duration: 2, opacity: 1 },
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

  // Stellar Effect: Create a star that follows the mouse pointer
  document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.classList.add('stellar-star');
    // Center the star at the pointer (offset by half its size)
    star.style.left = (e.pageX - 4) + 'px';
    star.style.top = (e.pageY - 4) + 'px';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 500);
  });

  // Additional: On click, spawn a burst of stars around the pointer
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 5; i++) {
      const burstStar = document.createElement('div');
      burstStar.classList.add('stellar-star');
      burstStar.style.left = (e.pageX + Math.random() * 20 - 10) + 'px';
      burstStar.style.top = (e.pageY + Math.random() * 20 - 10) + 'px';
      document.body.appendChild(burstStar);
      setTimeout(() => burstStar.remove(), 500);
    }
  });
});
