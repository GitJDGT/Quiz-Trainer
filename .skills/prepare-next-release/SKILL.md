# Prepare Next Release Skill

## Purpose

Crear un nuevo archivo de especificación de release en `specs/releases/` para planificar la siguiente release del producto.

Esta skill no implementa código.

Su única responsabilidad es preparar la siguiente release basándose en el product backlog y la documentación del proyecto.

---

## Required Inputs

El usuario deberá indicar cuál release preparar.

Ejemplos:

- Release 1.1
- Release 1.2
- Release 2.0

---

## Required References

Antes de crear el archivo de release, revisar obligatoriamente:

- `AGENTS.md`
- `specs/013-product-backlog.md`
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

- La release anterior en `specs/releases/` tenga el status **Completed** (si existe).
- El usuario haya aprobado explícitamente la release anterior.
- Las features asignadas a la release existan en `specs/013-product-backlog.md`.

Si la release anterior no está completada, detener la ejecución y notificar al usuario.

---

## Workflow

### Paso 1: Validar Prerrequisitos

1. Verificar si existe una release anterior en `specs/releases/`.
2. Si existe, verificar que su status sea **Completed**.
3. Si no es así, detener y notificar al usuario.

### Paso 2: Leer Documentación

1. Leer completamente `specs/013-product-backlog.md`.
2. Localizar la release solicitada.
3. Verificar que la release existe en el backlog.
4. Identificar las features asignadas a la release.
5. Leer todas las referencias obligatorias listadas arriba.

### Paso 3: Analizar Dependencias

1. Para cada feature asignada, identificar dependencias técnicas.
2. Verificar que las dependencias están disponibles.
3. Documentar cualquier dependencia faltante.

### Paso 4: Evaluar Riesgos

1. Identificar riesgos potenciales para cada feature.
2. Evaluar probabilidad e impacto de cada riesgo.
3. Definir estrategias de mitigación.

### Paso 5: Preparar Archivo de Release

1. Crear el archivo `specs/releases/RELEASE-X.X.md`.
2. Establecer el campo **Status** en `Ready for Development`.
3. Establecer el campo **Release** con el nombre de la release.
4. Establecer el campo **Objective** basado en las features del backlog.
5. Establecer el campo **Features** con la lista de funcionalidades.
6. Establecer el campo **Scope** basado en las features.
7. Establecer el campo **Out of Scope** con las exclusiones.
8. Establecer el campo **Dependencies** con las dependencias identificadas.
9. Establecer el campo **Risk Assessment** con los riesgos evaluados.
10. Establecer el campo **Acceptance Criteria** basado en las features.
11. Establecer el campo **Deliverables** con los entregables esperados.
12. Establecer el campo **Definition of Done** con los criterios de calidad.
13. Establecer el campo **Expected Output** con el resultado esperado.
14. Establecer el campo **Stop Condition** con las instrucciones de detención.
15. Establecer el campo **Rollback Plan** con el plan de reversión.

### Paso 6: Validar

1. Verificar que el formato del documento es correcto.
2. Verificar que toda la información coincide con el backlog.
3. Verificar que no se omitió ninguna sección.
4. Verificar que las dependencias están documentadas.
5. Verificar que los riesgos están evaluados.

---

## Responsibilities

La skill deberá:

1. Localizar la release solicitada en el backlog.
2. Leer completamente las features asignadas.
3. Analizar dependencias y riesgos.
4. Crear el archivo de release con todas las secciones.
5. Mantener el formato establecido.
6. Documentar dependencias y riesgos apropiadamente.

---

## Status Values

El campo **Status** del archivo de release acepta los siguientes valores:

- `Ready for Development` - Listo para comenzar (valor inicial al preparar release)
- `In Progress` - Desarrollo en curso
- `Pending Review` - Esperando revisión del usuario
- `Approved` - Aprobado por el usuario
- `Completed` - Release finalizada

Al preparar una nueva release, el status siempre deberá establecerse en `Ready for Development`.

---

## Sections Reference

El archivo de release contiene las siguientes secciones:

| Sección | Descripción |
|---------|-------------|
| Status | Estado actual de la release |
| Release | Nombre de la release |
| Objective | Objetivo principal |
| Features | Funcionalidades asignadas |
| Scope | Alcance específico |
| Out of Scope | Exclusiones |
| Dependencies | Dependencias técnicas |
| Risk Assessment | Riesgos identificados |
| Acceptance Criteria | Criterios de aceptación |
| Deliverables | Entregables esperados |
| Definition of Done | Criterios de finalización |
| Expected Output | Resultado esperado |
| Stop Condition | Instrucciones de detención |
| Rollback Plan | Plan de reversión |
| Release Lifecycle | Estados válidos |
| Change Control | Control de cambios |
| Next Release | Siguiente release |

---

## Restrictions

La skill NO deberá:

- implementar código;
- modificar documentos dentro de `specs/` (excepto crear el archivo de release);
- cambiar `AGENTS.md`;
- alterar el alcance de la release;
- preparar una release si la anterior no está completada;
- asignar features que no existen en el backlog.

---

## Validation

Antes de finalizar deberá comprobar que:

- la release existe en el backlog;
- las features asignadas existen en el backlog;
- el objetivo es consistente con las features;
- el scope incluye todas las features asignadas;
- el out of scope excluye funcionalidades no pertenecientes;
- las dependencias están documentadas;
- los riesgos están evaluados;
- los criterios de aceptación son medibles;
- los deliverables son alcanzables;
- el rollback plan es viable;
- el documento mantiene el formato establecido;
- el status está establecido en `Ready for Development`.
