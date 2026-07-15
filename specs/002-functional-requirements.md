# Functional Requirements

## FR-001 - Inicio de una sesión

El sistema deberá permitir iniciar una nueva sesión de práctica utilizando todas las preguntas disponibles en el banco de preguntas.

La sesión se iniciará cuando el usuario haga clic en el botón "Comenzar" desde la pantalla de bienvenida.

---

## FR-002 - Orden aleatorio de las preguntas

Cada nueva sesión deberá presentar las preguntas en un orden aleatorio.

No deberá existir una secuencia fija entre diferentes sesiones.

La aleatorización del orden de las opciones de respuesta no formará parte del MVP.

---

## FR-003 - Preguntas con imágenes

El sistema deberá soportar preguntas que incluyan una imagen asociada.

Las preguntas con imágenes deberán participar en la aleatorización exactamente igual que las preguntas sin imágenes.

---

## FR-004 - Visualización individual

El sistema deberá mostrar únicamente una pregunta a la vez.

El usuario no podrá visualizar preguntas futuras mientras responde la pregunta actual.

---

## FR-005 - Selección de respuesta

Cada pregunta deberá permitir seleccionar una única opción de respuesta.

No será posible seleccionar múltiples respuestas simultáneamente.

---

## FR-006 - Validación inmediata

Una vez enviada la respuesta, el sistema deberá evaluar inmediatamente si la respuesta es correcta o incorrecta.

---

## FR-007 - Retroalimentación

Después de validar una respuesta, el sistema únicamente deberá informar si la respuesta fue:

- Correcta.
- Incorrecta.

El sistema no deberá revelar cuál era la respuesta correcta.

---

## FR-008 - Continuación

Después de recibir la retroalimentación, el usuario podrá avanzar a la siguiente pregunta.

---

## FR-009 - No repetición

Durante una misma sesión, cada pregunta deberá mostrarse una única vez.

---

## FR-010 - Finalización

La sesión finalizará cuando todas las preguntas hayan sido respondidas.

---

## FR-011 - Resultado final

Al finalizar la sesión, el sistema deberá mostrar como mínimo:

- Total de preguntas.
- Respuestas correctas.
- Respuestas incorrectas.
- Porcentaje de aciertos.

---

## FR-012 - Banco de preguntas

El sistema deberá cargar todas las preguntas desde una fuente de datos externa al código de la aplicación.

La modificación del banco de preguntas no deberá requerir cambios en la lógica del sistema.

El MVP únicamente deberá soportar un único banco de preguntas.

---

## FR-013 - Navegación controlada

Una vez enviada una respuesta, el usuario no podrá modificarla.

La única acción disponible será continuar con la siguiente pregunta.

---

## FR-014 - Validación del banco de preguntas

Al cargar el banco de preguntas, el sistema deberá validar que el archivo:

- Exista y sea accesible.
- Tenga un formato JSON válido.
- Contenga la estructura requerida según el modelo de datos.

Los campos opcionales (image, category) podrán omitirse sin causar errores de validación.

Si la validación falla, el sistema deberá mostrar un mensaje de error descriptivo sin finalizar inesperadamente.

---

## FR-015 - Manejo de errores de carga

Si el banco de preguntas no puede cargarse correctamente, el sistema deberá:

- Mostrar un mensaje de error claro al usuario.
- Permitir reintentar la carga.
- No iniciar una sesión de práctica con datos incompletos o inválidos.