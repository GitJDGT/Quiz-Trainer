# Data Model

## Overview

El sistema utilizará un banco de preguntas compuesto por una colección de preguntas independientes.

Cada registro representa una única pregunta.

---

# Question

Cada pregunta deberá contener la siguiente información:

| Campo | Descripción | Obligatorio |
|--------|-------------|-------------|
| id | Identificador único de la pregunta | Sí |
| statement | Enunciado de la pregunta | Sí |
| image | Imagen asociada a la pregunta | No |
| options | Lista de opciones de respuesta | Sí |
| correctAnswer | Identificador de la opción correcta | Sí |
| category | Categoría o tema de la pregunta | No |

---

# Option

Cada opción de respuesta deberá contener:

| Campo | Descripción | Obligatorio |
|--------|-------------|-------------|
| id | Identificador de la opción | Sí |
| text | Texto de la opción | Sí |

---

# Restricciones

## Identificador

Cada pregunta deberá poseer un identificador único.

No podrán existir dos preguntas con el mismo identificador.

---

## Opciones

Cada pregunta deberá tener como mínimo dos opciones de respuesta.

No se establece un límite máximo.

---

## Identificadores de opciones

Cada opción deberá poseer un identificador único dentro de la pregunta a la que pertenece.

No podrán existir dos opciones con el mismo identificador dentro de una misma pregunta.

---

## Respuesta correcta

Cada pregunta deberá tener exactamente una única respuesta correcta.

La respuesta correcta deberá corresponder a una de las opciones definidas para la pregunta.

---

## Imagen

La imagen es opcional.

Si una pregunta no posee imagen, el sistema deberá mostrar únicamente el enunciado y las opciones.

### Restricciones de imagen

- Tamaño máximo: 1920x1080 píxeles.
- Peso máximo: 20 MB.
- Formatos soportados: JPEG, PNG, WebP.

---

## Independencia

Las preguntas deberán ser completamente independientes entre sí.

La modificación de una pregunta no deberá afectar ninguna otra.

---

# Extensibilidad

Con el fin de facilitar futuras versiones del sistema, una pregunta podrá incluir información adicional que no será utilizada por la primera versión de la aplicación.

## Category

Permite clasificar una pregunta dentro de un tema o grupo específico.

Este campo no será utilizado en la versión inicial.