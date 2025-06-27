const form = document.getElementById('FORMULARIO');
const response = document.getElementById("form-response");
const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const err = [];

  if (nombre === '') err.push('El campo Nombre es obligatorio');
  if (email === '') err.push('El campo Email es obligatorio');
  else if (!Regex.test(email)) err.push('El correo no tiene un formato válido');

  if (err.length > 0) {
    alert('Corrige los siguientes errores:\n\n' + err.join('\n'));
    return;
  }

  response.textContent = "¡Gracias por tu mensaje! Te responderemos pronto 💜";
  form.reset();
});
