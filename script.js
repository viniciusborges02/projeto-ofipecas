// Botão de menu lateral
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('visible');
  sideMenu.classList.toggle('hidden');
});

// Carrossel automático + swipe
const carrossel = document.getElementById('carrossel');
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

let index = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

carrossel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(autoSlide);
});

carrossel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

carrossel.addEventListener('touchend', () => {
  const deltaX = currentX - startX;
  if (deltaX > 50) showSlide(index - 1);
  else if (deltaX < -50) showSlide(index + 1);
  isDragging = false;
  startAutoSlide();
});

let autoSlide;
function startAutoSlide() {
  autoSlide = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
}
startAutoSlide();

