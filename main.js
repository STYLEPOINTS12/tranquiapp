document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    alert("Gracias por tu interés. Nos pondremos en contacto pronto.");
    document.getElementById("contact-form").reset();
  } else {
    alert("Por favor, introduce un correo electrónico válido.");
  }
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
