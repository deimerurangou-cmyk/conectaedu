document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.getElementById('btnModal');
  if (modalBtn) {
    modalBtn.addEventListener('click', () => {
      const modal = new bootstrap.Modal(document.getElementById('mensajeModal'));
      modal.show();
    });
  }

  const formProyecto = document.getElementById('formProyecto');
  if (formProyecto) {
    formProyecto.addEventListener('submit', e => {
      e.preventDefault();
      const nombre = document.getElementById('nombreProyecto').value.trim();
      const desc = document.getElementById('descripcionProyecto').value.trim();
      if (nombre && desc) {
        const lista = document.getElementById('listaProyectos');
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        item.textContent = `${nombre}: ${desc}`;
        lista.appendChild(item);
        e.target.reset();
      } else {
        alert('Por favor completa todos los campos.');
      }
    });
  }

  const formContacto = document.getElementById('formContacto');
  if (formContacto) {
    formContacto.addEventListener('submit', e => {
      e.preventDefault();
      alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente.');
      e.target.reset();
    });
  }
});
