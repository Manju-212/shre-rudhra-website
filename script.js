const slides = [
  { title: 'The Walnut House', note: 'Walnut · Linen · Afternoon light', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88', alt: 'Warm contemporary living room with natural wood and linen' },
  { title: 'A Garden Within', note: 'Sage · Sunlight · Stillness', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88', alt: 'Light filled living room opening onto greenery' },
  { title: 'Earth & Memory', note: 'Clay · Stone · Craft', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88', alt: 'Earthy modern interior with natural materials' },
  { title: 'The Quiet Edit', note: 'Ivory · Oak · Gentle contrast', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88', alt: 'Calm neutral living room with oak details' }
];
let currentSlide = 0;
const heroImage = document.querySelector('#heroImage');
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];
  heroImage.style.backgroundImage = `url('${slide.image}')`;
  heroImage.setAttribute('aria-label', slide.alt);
  document.querySelector('#slideTitle').textContent = slide.title;
  document.querySelector('#slideNote').textContent = slide.note;
  document.querySelector('#slideNumber').textContent = String(currentSlide + 1).padStart(2, '0');
}
document.querySelector('#prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('#nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
