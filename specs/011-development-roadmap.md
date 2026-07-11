# Development Roadmap

## Overview

Este documento define la estrategia de desarrollo del Quiz Engine.

El desarrollo deberá realizarse de manera incremental, asegurando que cada incremento produzca una versión funcional y verificable del sistema.

Cada incremento deberá completarse y validarse antes de iniciar el siguiente.

---

# Increment 1 - Project Foundation

## Objective

Construir la base del proyecto y preparar el entorno para el desarrollo.

## Scope

- Crear la estructura del repositorio.
- Crear la estructura de carpetas.
- Configurar los archivos iniciales.
- Crear el banco de preguntas de ejemplo.
- Implementar la carga del banco de preguntas.
- Mostrar una pregunta en pantalla.

## Acceptance Criteria

- La aplicación inicia correctamente.
- El banco de preguntas se carga sin errores.
- Se muestra correctamente una pregunta con o sin imagen.
- La interfaz puede visualizarse en el navegador.

## Deliverable

Primera versión navegable del proyecto.

---

# Increment 2 - Quiz Session

## Objective

Implementar el flujo principal de una sesión de práctica.

## Scope

- Iniciar una sesión.
- Aleatorizar preguntas.
- Mostrar una pregunta a la vez.
- Navegar entre preguntas.
- Evitar preguntas repetidas.

## Acceptance Criteria

- Todas las preguntas aparecen exactamente una vez.
- El orden cambia entre sesiones.
- La navegación funciona correctamente.

## Deliverable

Sesión completa de navegación.

---

# Increment 3 - Answer Validation

## Objective

Implementar la interacción del usuario con las preguntas.

## Scope

- Selección de respuesta.
- Botón Responder.
- Validación inmediata.
- Mostrar Correcto o Incorrecto.
- Bloquear la respuesta.
- Habilitar botón Siguiente.

## Acceptance Criteria

- No es posible responder dos veces la misma pregunta.
- No se muestra la respuesta correcta.
- El flujo cumple con las especificaciones funcionales.

## Deliverable

Flujo completo de respuesta.

---

# Increment 4 - Progress Tracking

## Objective

Incorporar el seguimiento de la sesión.

## Scope

- Contador de preguntas.
- Barra de progreso.
- Registro de respuestas.
- Estadísticas de la sesión.

## Acceptance Criteria

- El progreso se actualiza correctamente.
- Las estadísticas reflejan el estado real de la sesión.

## Deliverable

Seguimiento completo de la sesión.

---

# Increment 5 - Results

## Objective

Finalizar el ciclo completo de una sesión.

## Scope

- Mostrar resultados finales.
- Calcular porcentaje de aciertos.
- Reiniciar una sesión.

## Acceptance Criteria

- Las estadísticas finales son correctas.
- Es posible iniciar una nueva sesión.

## Deliverable

Primer MVP completamente funcional.

---

# Increment 6 - User Experience

## Objective

Mejorar la experiencia de uso sin modificar la funcionalidad principal.

## Scope

- Diseño responsive.
- Mejoras visuales.
- Accesibilidad.
- Optimización de la interfaz.

## Acceptance Criteria

- La aplicación funciona correctamente en escritorio y dispositivos móviles.
- La interfaz mantiene un comportamiento consistente.

## Deliverable

MVP listo para distribución.

---

# Increment 7 - Testing & Validation

## Objective

Validar que el sistema cumple completamente con la especificación.

## Scope

Verificar:

- Requisitos funcionales.
- Requisitos no funcionales.
- Flujo de usuario.
- Arquitectura.
- Compatibilidad entre navegadores.

## Acceptance Criteria

- Todos los documentos de la carpeta `specs/` se cumplen.
- No existen errores funcionales conocidos.

## Deliverable

Versión estable del Quiz Engine.