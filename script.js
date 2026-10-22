// --- 1. FILTRADO DE CURSOS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Quitar estado activo de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    courseCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || filter === category) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 2. MANEJO DEL MODAL DE INSCRIPCIÓN ---
const enrollModal = document.getElementById('enrollModal');
const modalProgramName = document.getElementById('modal-program-name');
const enrollForm = document.getElementById('enroll-form');

function openEnrollModal(programName) {
  modalProgramName.textContent = programName;
  enrollModal.classList.add('active');
}

function closeEnrollModal() {
  enrollModal.classList.remove('active');
}

// Cerrar modal al hacer clic fuera de la caja blanca
enrollModal.addEventListener('click', (e) => {
  if (e.target === enrollModal) {
    closeEnrollModal();
  }
});

// Submit del formulario
enrollForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('student-name').value;
  const program = modalProgramName.textContent;

  alert(`¡Gracias por inscribirte, ${name}!\n\nTe hemos enviado un correo con los detalles del programa: ${program}.`);
  
  enrollForm.reset();
  closeEnrollModal();
});