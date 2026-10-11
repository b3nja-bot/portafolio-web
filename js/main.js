/* ==========================================================================
   PORTAFOLIO PROFESIONAL - BENJAMÍN LÓPEZ
   SCRIPTS PRINCIPALES (VANILLA JAVASCRIPT SENCILLO Y DEFENDIBLE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // NAVEGACION ACTIVA Y SCROLL //
  const navLinks = document.querySelectorAll('.nav-link-custom');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // CIERRE AUTOMATICO MENU MOVIL //
  const navbarCollapse = document.getElementById('navbarContent');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Cierra el menú desplegable en pantallas pequeñas
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // COPIAR CORREO AL PORTAPAPELES //
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'benjaminsitocl@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btnCopyEmail.innerHTML;
        btnCopyEmail.innerHTML = '<i class="bi bi-check2"></i> ¡Copiado!';
        btnCopyEmail.classList.add('btn-light', 'text-dark');

        setTimeout(() => {
          btnCopyEmail.innerHTML = originalText;
          btnCopyEmail.classList.remove('btn-light', 'text-dark');
        }, 2000);
      });
    });
  }

  // FORMULARIO DE CONTACTO //
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('senderName').value;
      const subject = document.getElementById('senderSubject').value;
      const message = document.getElementById('senderMessage').value;

      // Crear enlace mailto directo y accesible
      const mailtoLink = `mailto:benjaminsitocl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Hola Benjamín, soy ' + name + ':\n\n' + message)}`;
      
      // Mostrar confirmación visual limpia
      if (formFeedback) {
        formFeedback.classList.remove('d-none');
        formFeedback.innerHTML = `
          <div class="alert alert-dark border-secondary text-white py-2 px-3 mt-3 mb-0" role="alert">
            <i class="bi bi-envelope-check text-info me-2"></i>
            Redirigiendo a tu cliente de correo... Si no se abre automáticamente, 
            <a href="${mailtoLink}" class="text-white text-decoration-underline fw-bold">haz clic aquí</a>.
          </div>
        `;
      }

      window.location.href = mailtoLink;
      contactForm.reset();
    });
  }

  // AÑO DINAMICO FOOTER //
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
