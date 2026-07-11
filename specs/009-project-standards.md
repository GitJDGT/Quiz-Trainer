# Project Standards

## Overview

Este documento define los estándares generales que deberán seguirse durante el desarrollo del proyecto.

Su objetivo es mantener la consistencia, facilitar el mantenimiento y asegurar la calidad del código.

---

# PS-001 - Project Language

## Source Code

Todo el código fuente deberá escribirse en inglés.

Esto incluye:

- Variables.
- Funciones.
- Clases.
- Archivos.
- Carpetas.
- Comentarios técnicos.
- Interfaces públicas.

## User Interface

La interfaz de usuario deberá mostrarse inicialmente en español.

La arquitectura deberá facilitar la incorporación de otros idiomas en futuras versiones.

---

# PS-002 - Naming Conventions

Los nombres deberán ser descriptivos y evitar abreviaturas innecesarias.

Ejemplos correctos:

- questionRepository
- currentQuestion
- selectedAnswer

Ejemplos incorrectos:

- qr
- cq
- sa

---

# PS-003 - Folder Organization

Los archivos deberán organizarse por responsabilidad.

La estructura del proyecto deberá ser clara, consistente y fácilmente navegable.

---

# PS-004 - Separation of Responsibilities

Cada módulo deberá tener una única responsabilidad principal.

No deberán mezclarse responsabilidades de presentación, lógica de negocio y acceso a datos.

---

# PS-005 - Readability

La legibilidad del código tendrá prioridad sobre soluciones excesivamente complejas.

El código deberá ser fácil de comprender para otros desarrolladores.

---

# PS-006 - Reusability

Siempre que sea posible, los componentes deberán diseñarse para ser reutilizables.

---

# PS-007 - Documentation

Las funciones públicas y los módulos principales deberán estar documentados.

La documentación deberá mantenerse sincronizada con el comportamiento del sistema.

---

# PS-008 - Error Handling

Los errores deberán manejarse de forma controlada.

La aplicación no deberá finalizar inesperadamente ante datos inválidos o situaciones imprevistas.

---

# PS-009 - Hardcoded Values

Los valores constantes deberán centralizarse cuando sea apropiado.

Se evitará duplicar valores en múltiples lugares del código.

---

# PS-010 - Extensibility

Las nuevas funcionalidades deberán poder incorporarse con el menor impacto posible sobre el código existente.

---

# PS-011 - Simplicity First

Cuando existan múltiples soluciones válidas, deberá preferirse la más simple que cumpla correctamente con los requisitos del sistema.

---

# PS-012 - No Premature Optimization

No deberán implementarse optimizaciones anticipadas que aumenten innecesariamente la complejidad del código.

La optimización deberá realizarse únicamente cuando exista una necesidad demostrable.

---

# PS-013 - External Dependencies

Se evitará incorporar librerías externas salvo que aporten un beneficio claro y justificable.

---

# PS-014 - Browser APIs

Siempre que sea posible, deberá priorizarse el uso de APIs nativas del navegador antes que soluciones de terceros.

---

# PS-015 - AI-Friendly Code

El código deberá mantenerse organizado, modular y predecible, facilitando su comprensión tanto por desarrolladores humanos como por herramientas de inteligencia artificial.

---

# PS-016 - Coding Style

El proyecto deberá mantener un estilo de programación consistente en todos sus módulos.

La nomenclatura, el formato y la organización del código deberán seguir un mismo criterio durante todo el desarrollo.

---

# PS-017 - Single Source of Truth

Cada dato deberá tener una única fuente de verdad dentro del sistema.

Se evitará duplicar información que pueda generar inconsistencias.

---

# PS-018 - Keep It Simple

Siempre que una solución simple satisfaga completamente un requisito, deberá preferirse sobre alternativas más complejas.

---

# PS-019 - Repository Organization

La estructura del repositorio deberá mantenerse organizada y consistente.

Cada archivo deberá ubicarse en la carpeta correspondiente según su responsabilidad.

---

# PS-020 - Future-Proof Design

Las decisiones de diseño deberán favorecer la evolución futura del Quiz Engine sin introducir complejidad innecesaria en la primera versión (MVP).