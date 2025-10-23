// Navbar shadow effect saat di-scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Animasi fade saat scroll muncul elemen
const revealElements = document.querySelectorAll('.card, .section-title');
const revealOnScroll = () => {
  const trigger = window.innerHeight / 1.1;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('show');
  });
};

window.addEventListener('scroll', revealOnScroll);

// Tambah efek interaktif kecil pada tombol
document.querySelectorAll('.btn-fashion').forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});
