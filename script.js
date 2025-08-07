document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const navbar = document.getElementById("navbar");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");

  // Toggle menu saat hamburger diklik
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Tutup menu saat salah satu tautan diklik
  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });

  // Efek scroll navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Efek fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeEls.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFadeIn);
  window.addEventListener('resize', checkFadeIn);
  checkFadeIn(); // Panggil saat awal

  // Modal Gambar Proyek
  document.querySelectorAll(".proyek-img").forEach(img => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Tombol close
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Klik di luar gambar menutup modal
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
