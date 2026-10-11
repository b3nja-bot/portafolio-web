# Portafolio Profesional y Despliegue en la Nube

**Autor:** Christian Benjamín López Aguilar  
**Carrera:** Ingeniería en Tecnologías de la Información  
**Institución:** Universidad de las Fuerzas Armadas ESPE (5to Semestre)  
**Asignatura:** Web 2  
**Contacto:** [benjaminsitocl@gmail.com](mailto:benjaminsitocl@gmail.com)  
**GitHub:** [b3nja-bot](https://github.com/b3nja-bot)  
**LinkedIn:** [Perfil Profesional](https://www.linkedin.com/in/benjamin-l%C3%B3pez-b51396404?utm_source=share_via&utm_content=profile&utm_medium=member_android)  
**Instagram:** [@soy___benja](https://www.instagram.com/soy___benja?srtk=bWE3M2FxMW0xbjNr)  

---

## 📌 Descripción del Proyecto

Este proyecto consiste en un **Portafolio Web Profesional** desarrollado bajo la filosofía **Mobile First**, con una estética sobria y elegante de inspiración **Samsung Dark** (negro absoluto `#000000`, detalles metálicos/plateados y tipografía de alto contraste).

El código está estructurado únicamente con las tecnologías revisadas en clase: **HTML5, CSS3, JavaScript Vanilla y Bootstrap 5**, asegurando que cada componente sea 100% defendible y fácil de explicar ante una evaluación académica.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Marcado semántico (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Variables nativas (`:root`), Flexbox, CSS Grid, transiciones suaves y estética Samsung.
- **Bootstrap 5.3:** 
  - *Filosofía Mobile First:* Sistema de rejillas responsivo (`col-12` en móvil, `col-md-4` en escritorio).
  - *Utilidades Flexbox:* `d-flex`, `align-items-center`, `justify-content-center`, `flex-column`, `flex-md-row`.
  - *Componentes:* `Cards`, `Progress Bars`, `Badges`, `Navbar`, `Buttons`.
- **Bootstrap Icons 1.11:** Iconografía ligera y escalable vía CDN.
- **JavaScript (ES6 Vanilla):** Código ultra-simple para cierre automático del menú colapsable en móviles y copia rápida de correo electrónico al portapapeles.

---

## 📂 Estructura del Proyecto

```
WEB 2/
├── index.html                   # Redirección automática hacia el Deber 1
├── Parcial 1/
│   └── Deberes/
│       └── Deber1/
│           ├── index.html       # Página principal del Portafolio Profesional
│           ├── css/
│           │   └── styles.css   # Estilos Samsung Dark de alto contraste
│           ├── js/
│           │   └── main.js      # JavaScript Vanilla limpio y defendible
│           ├── img/
│           │   └── perfil.png   # Foto profesional oficial de estudio
│           ├── src/
│           │   └── Curriculum_Benjamin_Lopez.pdf # CV descargable en PDF
│           └── README.md        # Documentación del deber
├── .gitignore                   # Archivos excluidos del control de versiones
└── README.md                    # Documentación general del repositorio
```

---

## 🚀 Despliegue en GitHub Pages

1. **Vincular el repositorio remoto y subir el código:**
   ```bash
   git add .
   git commit -m "feat: portafolio profesional en Parcial 1/Deberes/Deber1"
   git push -u origin main
   ```

2. **Activar GitHub Pages:**
   - En tu repositorio de GitHub [https://github.com/b3nja-bot/portafolio-web](https://github.com/b3nja-bot/portafolio-web), ingresa a **Settings** > **Pages**.
   - En **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.
   - Tu sitio web quedará disponible en:
     `https://b3nja-bot.github.io/portafolio-web/`
