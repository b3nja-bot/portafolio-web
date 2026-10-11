# Portafolio Profesional y Despliegue en la Nube

**Autor:** Christian Benjamín López Aguilar  
**Carrera:** Ingeniería en Tecnologías de la Información  
**Institución:** Universidad de las Fuerzas Armadas ESPE (5to Semestre)  
**Asignatura:** Web 2  
**Contacto:** [benjaminsitocl@gmail.com](mailto:benjaminsitocl@gmail.com)  
**LinkedIn:** [Perfil Profesional](https://www.linkedin.com/in/benjamin-l%C3%B3pez-b51396404?utm_source=share_via&utm_content=profile&utm_medium=member_android)  
**Instagram:** [@soy___benja](https://www.instagram.com/soy___benja?srtk=bWE3M2FxMW0xbjNr)  

---

## 📌 Descripción del Proyecto

Este proyecto consiste en un **Portafolio Web Profesional** desarrollado bajo la filosofía **Mobile First**, con una estética sobria y elegante de inspiración **Samsung Dark** (negro absoluto `#000000`, detalles metálicos/plateados y tipografía de alto impacto).

El código está estructurado únicamente con las tecnologías revisadas en clase: **HTML5, CSS3, JavaScript Vanilla y Bootstrap 5**, asegurando que cada componente sea 100% defendible y fácil de explicar ante una evaluación académica.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Marcado semántico (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Variables nativas (`:root`), Flexbox, CSS Grid, transiciones suaves y estética Samsung.
- **Bootstrap 5.3:** 
  - *Filosofía Mobile First:* Sistema de rejillas responsivo (`col-12` en móvil, `col-md-4` en escritorio).
  - *Utilidades Flexbox:* `d-flex`, `align-items-center`, `justify-content-center`, `flex-column`, `flex-md-row`.
  - *Componentes:* `Cards`, `Progress Bars`, `Badges`, `Modals`, `Navbar`, `Buttons`.
- **Bootstrap Icons 1.11:** Iconografía ligera y escalable vía CDN.
- **JavaScript (ES6 Vanilla):** Desplazamiento suave, control de navegación activa al hacer scroll, botón para copiar correo al portapapeles y manejo interactivo de formularios sin dependencias complejas.

---

## 📂 Estructura de Archivos

```
WEB 2/
├── index.html                   # Página principal estructurada en secciones clave
├── css/
│   └── styles.css               # Estilos personalizados (Samsung Dark & transiciones)
├── js/
│   └── main.js                  # Lógica interactiva en Vanilla JS
├── img/
│   ├── perfil.jpg               # Foto profesional oficial de Benjamín López
│   ├── proyecto-pos.svg         # Mockup del Sistema POS & Facturación
│   ├── proyecto-segundo-cerebro.svg # Mockup del Asistente de Conocimiento
│   └── proyecto-crud.svg        # Mockup del Sistema CRUD Inventario
├── src/
│   ├── Curriculum_Benjamin_Lopez.pdf # Currículum Vitae en PDF para descarga directa
│   └── curriculum.pdf           # Copia de respaldo para compatibilidad
├── .gitignore                   # Archivos excluidos del versionado
└── README.md                    # Documentación del proyecto
```

---

## 🚀 Guía de Despliegue en GitHub Pages

Para publicar este proyecto de forma gratuita y accesible para cualquier empleador:

1. **Inicializar Git y hacer commit:**
   ```bash
   git init
   git add .
   git commit -m "feat: portafolio profesional mobile first con estilo samsung dark"
   ```

2. **Crear el repositorio en GitHub:**
   - Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio público (ejemplo: `portafolio-profesional`).

3. **Vincular el repositorio remoto y subir el código:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/portafolio-profesional.git
   git branch -M main
   git push -u origin main
   ```

4. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, dirígete a **Settings** > **Pages** (en el menú lateral izquierdo).
   - En **Build and deployment** > **Source**, selecciona `Deploy from a branch`.
   - En **Branch**, selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save**.
   - En 1-2 minutos, tu sitio web estará disponible públicamente en la URL:
     `https://TU_USUARIO.github.io/portafolio-profesional/`

---

## 🎓 Aspectos Clave para la Defensa Académica

1. **¿Cómo se aplica Mobile First?**  
   Todo el diseño se estructuró pensando primero en pantallas móviles (`col-12`, márgenes compactos, botones al 100% de ancho). Mediante los breakpoints de Bootstrap (`md: 768px`, `lg: 992px`), las tarjetas se expanden a 3 columnas (`col-md-4`) y la navegación pasa de menú hamburguesa a barra horizontal.

2. **¿Por qué la estética negra?**  
   Sigue las guías de diseño sobrio de Samsung, transmitiendo modernidad, seriedad profesional y reduciendo la fatiga visual, con un contraste accesible entre texto blanco `#ffffff` y fondo `#000000`.

3. **¿Cómo se maneja la descarga del CV?**  
   Mediante el atributo HTML5 `download` apuntando al archivo PDF local `src/Curriculum_Benjamin_Lopez.pdf`, lo que permite descargarlo directamente o visualizarlo en una pestaña con `target="_blank"`.
