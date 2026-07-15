# Product Backlog

## Overview

Este documento define las funcionalidades planificadas para futuras releases del Quiz Trainer.

El archivo histórico `specs/008-future-enhancements.md` se preserva como referencia del proceso original de desarrollo del MVP.

Las funcionalidades se organizan por releases con versionado semántico (1.1, 1.2, 2.0).

---

## Release 1.1 - Import/Export

**Estado**: Completed

| ID | Feature | Descripción | Prioridad |
|----|---------|-------------|-----------|
| FE-010 | Import / Export Question Banks | Permitir importar y exportar bancos de preguntas utilizando formatos estándar | Alta |

---

## Release 1.2 - GitHub Pages Deployment

**Estado**: Completed

| ID | Feature | Descripción | Prioridad |
|----|---------|-------------|-----------|
| FE-021 | GitHub Pages Deployment | Preparar el proyecto para desplegarse en GitHub Pages, permitiendo acceso vía URL sin instalación | Alta |

---

## Backlog sin asignar

Las siguientes funcionalidades están pendientes de asignar a una release específica:

| ID | Feature | Descripción | Estado |
|----|---------|-------------|--------|
| FE-001 | Study Mode | Modo de estudio con explicaciones | Unassigned |
| FE-002 | Exam Mode | Modo de evaluación sin retroalimentación inmediata | Unassigned |
| FE-003 | Retry Incorrect Answers | Repetir solo preguntas incorrectas | Unassigned |
| FE-004 | Categories | Organizar y filtrar por categorías | Unassigned |
| FE-005 | Question Search | Localizar preguntas por ID o palabras clave | Unassigned |
| FE-006 | Session History | Historial de sesiones realizadas | Unassigned |
| FE-007 | Statistics | Estadísticas históricas de desempeño | Unassigned |
| FE-008 | Timer | Tiempo límite por pregunta o sesión | Unassigned |
| FE-009 | Question Bookmarking | Marcar preguntas para revisar | Unassigned |
| FE-011 | Multiple Question Banks | Administrar múltiples bancos de preguntas | Unassigned |
| FE-012 | Difficulty Levels | Clasificar por nivel de dificultad | Unassigned |
| FE-013 | Multimedia Support | Audio o video en preguntas | Unassigned |
| FE-014 | Internationalization | Aplicación en múltiples idiomas | Unassigned |
| FE-015 | Themes | Temas visuales para la interfaz | Unassigned |
| FE-016 | Session Configuration | Configurar sesión antes de iniciar | Unassigned |
| FE-017 | Review Mode | Revisar preguntas respondidas al finalizar | Unassigned |
| FE-018 | Persistent Progress | Guardar progreso automáticamente | Unassigned |
| FE-019 | Plugin Architecture | Extender el Quiz Engine con módulos | Unassigned |
| FE-020 | Multiple User Profiles | Múltiples perfiles con estadísticas independientes | Unassigned |

---

## Referencia Histórica

El archivo `specs/008-future-enhancements.md` contiene la lista original de mejoras futuras definidas durante la planificación del MVP. Se mantiene como referencia histórica del proceso de desarrollo.

---

## Notas

- Las funcionalidades FE-001 a FE-020 corresponden al archivo original `008-future-enhancements.md`
- Las funcionalidades FE-001 y FE-017 requieren agregar campo `explanation` al modelo de datos (definido en specs/004-data-model.md)
- FE-021 es una funcionalidad de despliegue que no modifica la lógica de la aplicación
- Las releases futuras pueden incluir múltiples funcionalidades según prioridades del producto
