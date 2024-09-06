/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
/* Enviar el formulario */
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  const response = await fetch('https://script.google.com/macros/s/AKfycbxHimmf3btfaFLDU91yQEo37AEd0yiXIHYGPJuyeqSnA0k4Dnqt-A6sqXFPUwb2oBiPtg/exec', {
    method: 'POST',
    body: formData
  });
  
  const result = await response.json();
  alert(result.message);
});
/* Limpiar el formulario */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o XMLHttpRequest


  // Limpiar el formulario
  event.target.reset();
});