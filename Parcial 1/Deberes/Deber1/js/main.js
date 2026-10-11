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

});
