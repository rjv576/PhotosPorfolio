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

/* Manejar el envío del formulario */
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevenir comportamiento predeterminado

  const formData = new FormData(form);

  try {
    // Enviar datos al script de Google Apps Script
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycby6cs-Iabh8WfYav8CSOmPfvXfw6wrzH-4SlRRgRHsyQIGtp36P4ERkcJz7txBXjiJM/exec',
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud. Verifica el script de Google.');
    }

    const result = await response.json();
    alert(result.message || '¡Formulario enviado exitosamente!');
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert('Hubo un problema al enviar el formulario. Por favor, inténtalo más tarde.');
  }

  // Limpiar el formulario después del envío
  form.reset();
});
