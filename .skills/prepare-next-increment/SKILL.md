# Prepare Next Increment Skill

## Purpose

Actualizar el archivo `TASK.md` para reflejar el siguiente incremento del proyecto.

Esta skill no implementa código.

Su única responsabilidad es preparar la siguiente orden de trabajo basándose en la documentación del proyecto.

---

## Required Inputs

El usuario deberá indicar cuál incremento preparar.

Ejemplos:

- Increment 2
- Increment 3
- Increment 4

---

## Required References

Antes de modificar `TASK.md`, revisar obligatoriamente:

- `AGENTS.md`
- `specs/011-development-roadmap.md`
- `specs/012-definition-of-done.md`
- `specs/002-functional-requirements.md`
- `specs/004-data-model.md`
- `specs/005-ui-specifications.md`
- `specs/007-system-architecture.md`
- `specs/009-project-standards.md`
- `specs/010-repository-structure.md`

---

## Prerequisites

Antes de ejecutar la skill, verificar que:

- El incremento anterior en `TASK.md` tenga el status **Completed**.
- El usuario haya aprobado explícitamente el incremento anterior.

Si el incremento anterior no está completado, detener la ejecución y notificar al usuario.

---

## Workflow

### Paso 1: Validar Prerrequisitos

1. Leer `TASK.md` actual.
2. Verificar que el status sea **Completed**.
3. Si no es así, detener y notificar al usuario.

### Paso 2: Leer Documentación

1. Leer completamente `specs/011-development-roadmap.md`.
2. Localizar el incremento solicitado.
3. Verificar que el incremento existe en el roadmap.
4. Leer todas las referencias obligatorias listadas arriba.

### Paso 3: Preparar TASK.md

1. Actualizar el campo **Status** a `Ready for Development`.
2. Actualizar el campo **Increment** con el nombre del nuevo incremento.
3. Actualizar el campo **Objective** con la información del roadmap.
4. Actualizar el campo **Scope** con la información del roadmap.
5. Actualizar el campo **Out of Scope** con las funcionalidades que NO se implementarán.
6. Actualizar el campo **Acceptance Criteria** con los criterios del roadmap.
7. Actualizar el campo **Deliverables** con los entregables del roadmap.
8. Actualizar el campo **Expected Output** basado en el objetivo del incremento.
9. Actualizar el campo **Stop Condition** con las instrucciones de detención.
10. Actualizar el campo **Next Task** a `No disponible`.

### Paso 4: Validar

1. Verificar que el formato del documento no cambió.
2. Verificar que toda la información coincide con el roadmap.
3. Verificar que no se omitió ninguna sección.

---

## Responsibilities

La skill deberá:

1. Localizar el incremento solicitado.
2. Leer completamente su definición.
3. Actualizar todas las secciones de `TASK.md`.
4. Mantener el formato existente.
5. Actualizar únicamente la información correspondiente al nuevo incremento.

---

## Status Values

El campo **Status** de `TASK.md` acepta los siguientes valores:

- `Ready for Development` - Listo para comenzar (valor inicial al preparar incremento)
- `In Progress` - Desarrollo en curso
- `Pending Review` - Esperando revisión del usuario
- `Approved` - Aprobado por el usuario
- `Completed` - Incremento finalizado

Al preparar un nuevo incremento, el status siempre deberá establecerse en `Ready for Development`.

---

## Sections Reference

TASK.md contiene las siguientes secciones que deberán actualizarse:

| Sección | Descripción |
|---------|-------------|
| Status | Estado actual de la tarea |
| Increment | Nombre del incremento |
| Objective | Objetivo principal del incremento |
| Scope | Funcionalidades incluidas |
| Out of Scope | Funcionalidades excluidas |
| Constraints | Restricciones y referencias obligatorias |
| Agent Instructions | Instrucciones para el agente (no modificar) |
| Acceptance Criteria | Criterios de aceptación |
| Deliverables | Entregables esperados |
| Definition of Done | Criterios de finalización (no modificar) |
| Expected Output | Resultado esperado del incremento |
| Stop Condition | Instrucciones de detención |
| Task Lifecycle | Valores de status (no modificar) |
| Change Control | Control de cambios (no modificar) |
| Next Task | Siguiente incremento (después de completar) |

---

## Restrictions

La skill NO deberá:

- implementar código;
- modificar documentos dentro de `specs/`;
- cambiar `AGENTS.md`;
- modificar el formato de `TASK.md`;
- alterar el alcance del incremento;
- preparar un incremento si el anterior no está completado.

---

## Validation

Antes de finalizar deberá comprobar que:

- el incremento existe en el roadmap;
- el objetivo coincide con el roadmap;
- el scope coincide con el roadmap;
- el out of scope incluye las funcionalidades no pertenecientes al incremento;
- los criterios de aceptación fueron copiados correctamente;
- los deliverables coinciden con el roadmap;
- el expected output es consistente con el objetivo;
- la stop condition está definida;
- el documento mantiene el mismo formato;
- el status está establecido en `Ready for Development`.
