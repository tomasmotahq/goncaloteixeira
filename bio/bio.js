document.addEventListener("DOMContentLoaded", () => {
  const slideshowContainer = document.querySelector(".slideshow-container");

  const images = [
    "../img/hero.jpeg",
    "../img/gallery1.jpeg",
    "../img/gallery2.jpeg",
    "../img/gallery3.jpeg"
  ];

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    slideshowContainer.appendChild(img);
  });

  // Efeito parallax
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    slideshowContainer.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector(".year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
