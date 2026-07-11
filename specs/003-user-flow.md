# User Flow

## Flujo principal

```text
Inicio
    │
    ▼
Pantalla de bienvenida
    │
    ▼
El usuario inicia una nueva sesión
    │
    ▼
El sistema prepara el banco de preguntas
    │
    ▼
Las preguntas son organizadas en un orden aleatorio
    │
    ▼
Se muestra la primera pregunta
    │
    ▼
El usuario selecciona una respuesta
    │
    ▼
El usuario presiona "Responder"
    │
    ▼
El sistema valida la respuesta
    │
    ▼
Se informa únicamente:

✓ Correcto

o

✗ Incorrecto

    │
    ▼
Se habilita el botón "Siguiente"
    │
    ▼
¿Quedan preguntas?

├── Sí
│       │
│       ▼
│   Mostrar siguiente pregunta
│
└── No
        │
        ▼
Mostrar resultados finales
        │
        ▼
Fin
```

---

# Estados de una pregunta

Cada pregunta pasa por los siguientes estados:

1. Pendiente
2. Respondida
3. Validada
4. Finalizada

Una vez una pregunta alcanza el estado **Finalizada**, no podrá volver a mostrarse durante la misma sesión.

---

# Flujo de validación

Para cada pregunta:

1. El usuario selecciona una única respuesta.
2. Presiona el botón **Responder**.
3. La respuesta queda bloqueada.
4. El sistema valida la respuesta.
5. Se informa únicamente si fue correcta o incorrecta.
6. Se habilita el botón **Siguiente**.

---

# Restricciones del flujo

Durante una sesión:

- No es posible regresar a preguntas anteriores.
- No es posible omitir preguntas.
- No es posible responder una pregunta dos veces.
- No es posible modificar una respuesta después de validarla.
- No se revela la respuesta correcta durante la sesión.

---

# Fin de la sesión

Cuando todas las preguntas han sido respondidas:

- Finaliza la sesión.
- Se muestran las estadísticas finales.
- El usuario podrá iniciar una nueva sesión.