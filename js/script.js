
        const burgerBtn = document.querySelector('.burger-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
   const modal = document.getElementById('loginModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close');

    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Вы успешно вошли!');
      modal.style.display = 'none';
    });
    document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const slider = document.querySelector('.slider');
  let currentIndex = 0;

  // Ширина одного слайда
  const slideWidth = slides[0].offsetWidth;

  function showSlide(index) {
    // Перемещаем слайдер на нужное место
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Обновляем активные классы
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });

    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Добавляем клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Инициализация
  showSlide(currentIndex);
});