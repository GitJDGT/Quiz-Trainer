# System Architecture

## Overview

La aplicación estará compuesta por módulos independientes, cada uno con una responsabilidad claramente definida.

El objetivo es favorecer la mantenibilidad, facilitar futuras ampliaciones y minimizar el acoplamiento entre componentes.

---

## Architecture Principles

- Separación de responsabilidades.
- Componentes independientes.
- Bajo acoplamiento.
- Alta cohesión.
- Código reutilizable.
- Fácil mantenimiento.

---

## Main Components

### User Interface

Responsable de mostrar la información al usuario y capturar su interacción.

No deberá contener lógica de negocio.

---

### Quiz Engine

Responsable de controlar el flujo de la sesión.

Entre sus responsabilidades se encuentran:

- iniciar una sesión;
- cargar preguntas;
- avanzar entre preguntas;
- validar respuestas;
- calcular resultados.

---

### Question Repository

Responsable de proporcionar el banco de preguntas al sistema.

La lógica de la aplicación no deberá depender del formato físico de almacenamiento.

---

### Session Manager

Responsable de mantener el estado de la sesión actual.

Incluye información como:

- pregunta actual;
- preguntas restantes;
- respuestas del usuario;
- estadísticas.

---

### Result Processor

Responsable de calcular las estadísticas finales de la sesión.

---

## Separation of Concerns

Cada componente deberá tener una única responsabilidad principal.

Las responsabilidades no deberán mezclarse entre componentes.

---

## Future Growth

La arquitectura deberá facilitar la incorporación de futuras funcionalidades sin requerir una reestructuración significativa del sistema.