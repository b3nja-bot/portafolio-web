
document.addEventListener('DOMContentLoaded', () => {



  // CIERRE AUTOMATICO DEL MENU EN MOVILES //
  const navbarCollapse = document.getElementById('navbarContent');
  const navLinks = document.querySelectorAll('.nav-link-custom');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });


  

  // COPIAR CORREO AL PORTAPAPELES //
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      navigator.clipboard.writeText('benjaminsitocl@gmail.com');
      btnCopyEmail.innerHTML = '<i class="bi bi-check2"></i> ¡Copiado!';
      
      setTimeout(() => {
        btnCopyEmail.innerHTML = '<i class="bi bi-clipboard"></i> Copiar';
      }, 2000);
    });
  }

});
