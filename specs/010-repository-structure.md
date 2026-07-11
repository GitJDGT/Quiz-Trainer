# Repository Structure

## Overview

Este documento define la organización física del proyecto.

La estructura deberá mantenerse simple, consistente y escalable, permitiendo incorporar nuevas funcionalidades y múltiples bancos de preguntas sin reorganizar el repositorio.

---

# Root Structure

El repositorio deberá organizarse de la siguiente manera:

```text
/
├── assets/
├── data/
├── docs/
├── specs/
├── src/
├── index.html
├── README.md
└── LICENSE
```

---

# assets/

Contendrá todos los recursos visuales utilizados por la aplicación.

Los recursos deberán organizarse por banco de preguntas para facilitar la administración de múltiples cuestionarios.

Propuesta inicial:

```text
assets/
└── question-banks/
    └── driving-test/
        └── images/
```

En futuras versiones podrán coexistir múltiples bancos:

```text
assets/
└── question-banks/
    ├── driving-test/
    │   └── images/
    ├── medicine/
    │   └── images/
    └── english/
        └── images/
```

---

# data/

Contendrá los bancos de preguntas utilizados por el Quiz Engine.

Cada banco de preguntas deberá mantenerse independiente.

Propuesta inicial:

```text
data/
└── driving-test.json
```

En futuras versiones:

```text
data/
├── driving-test.json
├── medicine.json
├── english.json
└── ...
```

---

# docs/

Contendrá documentación adicional del proyecto que no forme parte de la especificación.

Ejemplos:

- Manual de usuario.
- Guía de instalación.
- Guía para contribuir.
- Changelog.

---

# specs/

Contendrá toda la documentación del Specification Driven Development.

Ejemplo:

```text
specs/
├── 001-project-overview.md
├── ...
└── 011-implementation-plan.md
```

---

# src/

Contendrá exclusivamente el código fuente del proyecto.

No deberá contener recursos gráficos ni archivos de datos.

Propuesta inicial:

```text
src/
├── css/
├── js/
└── components/
```

---

# src/css/

Contendrá los archivos de estilos de la aplicación.

Ejemplo:

```text
src/css/
└── styles.css
```

---

# src/js/

Contendrá la lógica del Quiz Engine.

Los módulos deberán organizarse por responsabilidad.

No deberán depender directamente del contenido de un banco de preguntas específico.

---

# src/components/

Contendrá componentes reutilizables de la interfaz de usuario.

La primera versión podrá no requerir esta carpeta, pero se reserva para facilitar el crecimiento del proyecto.

---

# README.md

Deberá contener como mínimo:

- Descripción general del proyecto.
- Objetivos.
- Tecnologías utilizadas.
- Estructura del repositorio.
- Instrucciones de uso.

---

# LICENSE

Deberá contener la licencia elegida para el proyecto.

---

# General Rules

## RS-001

Cada archivo deberá ubicarse únicamente en la carpeta correspondiente a su responsabilidad.

---

## RS-002

Se evitarán estructuras de carpetas innecesariamente profundas.

---

## RS-003

Los nombres de archivos y carpetas deberán escribirse en inglés.

---

## RS-004

Se utilizará kebab-case para nombres de archivos y carpetas.

Ejemplos:

- project-standards.md
- question-repository.js
- session-manager.js

---

## RS-005

Los archivos de especificación deberán permanecer completamente separados del código fuente.

No deberán mezclarse documentos técnicos con archivos de implementación.

---

## RS-006

Cada banco de preguntas deberá mantenerse independiente del Quiz Engine.

El motor nunca deberá depender de un banco de preguntas específico.

---

## RS-007

Los recursos gráficos asociados a un banco de preguntas deberán mantenerse organizados junto a dicho banco.

---

## RS-008

La incorporación de un nuevo banco de preguntas no deberá requerir modificaciones en la estructura del repositorio.

---

## RS-009

La organización del repositorio deberá favorecer la mantenibilidad, reutilización y escalabilidad del proyecto.