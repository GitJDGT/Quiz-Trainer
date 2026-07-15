# Non-Functional Requirements

## NFR-001 - Offline Operation

La aplicación deberá funcionar completamente sin conexión a Internet una vez que todos sus archivos estén disponibles localmente.

---

## NFR-002 - Performance

La carga inicial del banco de preguntas deberá realizarse una única vez cuando el usuario haga clic en "Comenzar".

La navegación entre preguntas deberá ser inmediata para el usuario.

---

## NFR-003 - Browser Compatibility

La aplicación deberá ser compatible con las versiones recientes de los siguientes navegadores:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

---

## NFR-004 - Responsive Design

La interfaz deberá adaptarse correctamente a diferentes tamaños de pantalla sin perder funcionalidad.

---

## NFR-005 - Maintainability

El contenido del banco de preguntas deberá poder modificarse sin realizar cambios en la lógica de la aplicación.

---

## NFR-006 - Scalability

La aplicación deberá soportar incrementos en el número de preguntas sin requerir modificaciones en su funcionamiento.

---

## NFR-007 - Simplicity

La aplicación deberá minimizar el número de dependencias externas para facilitar su mantenimiento y distribución.

---

## NFR-008 - Reliability

Durante una sesión de práctica, cada pregunta deberá presentarse exactamente una vez, salvo que futuras funcionalidades definan un comportamiento diferente.

---

## NFR-009 - Accessibility

La interfaz deberá utilizar textos legibles, controles claramente identificables y un contraste adecuado para facilitar su uso.

---

## NFR-010 - Portability

La aplicación deberá poder ejecutarse simplemente abriendo el archivo principal desde un navegador moderno, sin requerir instalación ni configuración adicional.

---

## NFR-011 - Technology Stack

La primera versión deberá desarrollarse utilizando únicamente tecnologías web estándar:

- HTML5
- CSS3
- JavaScript moderno (ES6 o superior)

No deberán utilizarse frameworks de interfaz ni librerías externas, salvo que exista una justificación técnica documentada.

---

## NFR-012 - Code Quality

El código fuente deberá mantenerse organizado, modular y suficientemente documentado para facilitar futuras modificaciones y ampliaciones del sistema.