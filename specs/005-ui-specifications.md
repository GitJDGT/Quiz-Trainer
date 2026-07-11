# UI Specification

# General

### UI-001 - Single Screen

La aplicación deberá ejecutarse en una única pantalla.

No deberán existir múltiples páginas para navegar entre las preguntas.

---

### UI-002 - One Question at a Time

Únicamente una pregunta podrá estar visible al mismo tiempo.

---

### UI-003 - Responsive Layout

La interfaz deberá adaptarse correctamente tanto a equipos de escritorio como a dispositivos móviles.

---

# Welcome Screen

### UI-018 - Welcome Message

La pantalla de bienvenida deberá mostrar un mensaje que invite al usuario a iniciar la sesión.

Ejemplo: "¿Listo para el siguiente quiz?"

---

### UI-019 - Start Button

La pantalla de bienvenida deberá incluir un botón "Comenzar" que inicie la sesión de práctica.

El botón deberá ser el elemento principal y estar claramente visible.

---

# Question Area

### UI-004 - Question Statement

El enunciado de la pregunta deberá mostrarse de forma clara y legible.

---

### UI-005 - Question Image

Si la pregunta posee una imagen asociada, esta deberá mostrarse antes del enunciado.

Si la pregunta no posee imagen, el espacio no deberá reservarse.

---

### UI-006 - Answer Options

Las opciones de respuesta deberán mostrarse como una lista de selección única.

---

# Buttons

### UI-007 - Answer Button

El botón **Responder** deberá permanecer deshabilitado hasta que el usuario seleccione una opción.

---

### UI-008 - Next Button

El botón **Siguiente** deberá permanecer deshabilitado hasta que la respuesta haya sido validada.

---

### UI-009 - After Validation

Una vez validada una respuesta:

- La selección del usuario quedará bloqueada.
- El botón **Responder** quedará deshabilitado.
- El botón **Siguiente** quedará habilitado.

---

# Feedback

### UI-010 - Immediate Feedback

Después de validar una respuesta, el sistema deberá mostrar únicamente uno de los siguientes mensajes:

- Correcto.
- Incorrecto.

---

### UI-011 - Hidden Correct Answer

La interfaz no deberá mostrar cuál era la respuesta correcta.

---

### UI-012 - Feedback Visibility

El mensaje de retroalimentación permanecerá visible hasta que el usuario avance a la siguiente pregunta.

---

### UI-013 - Preserve User Selection

Después de validar una respuesta, la opción seleccionada por el usuario deberá permanecer visible y bloqueada hasta avanzar a la siguiente pregunta.

---

# Progress

### UI-014 - Question Counter

La interfaz deberá mostrar el número de la pregunta actual y el total de preguntas de la sesión.

El contador se mostrará al presentar cada pregunta, antes de que el usuario responda.

Ejemplo:

Pregunta 15 de 210

---

### UI-015 - Progress Bar

La interfaz deberá mostrar una barra de progreso basada en la cantidad de preguntas respondidas durante la sesión.

La barra deberá actualizarse automáticamente cada vez que el usuario avance a la siguiente pregunta.

---

# Results Screen

### UI-016 - Final Statistics

Al finalizar la sesión deberán mostrarse como mínimo:

- Total de preguntas.
- Respuestas correctas.
- Respuestas incorrectas.
- Porcentaje de aciertos.

---

### UI-017 - Restart Session

Desde la pantalla de resultados el usuario podrá iniciar una nueva sesión de práctica mediante un botón "Volver a empezar".

Al hacer clic, el sistema regresará a la pantalla de bienvenida.