# Quiz Trainer

Aplicación web ligera para practicar preguntas de opción múltiple de forma interactiva.

## Descripción

Quiz Trainer es una aplicación diseñada para el estudio y repaso de exámenes. Ofrece una experiencia rápida donde cada pregunta se responde de manera individual, con retroalimentación inmediata sobre si la respuesta fue correcta o incorrecta.

### Características

- Carga de bancos de preguntas desde archivos JSON
- Soporte para preguntas con o sin imagen
- Orden aleatorio de preguntas en cada sesión
- Validación inmediata de respuestas
- Seguimiento de progreso en tiempo real
- Resultados con porcentaje de aciertos al finalizar la sesión
- Importación de bancos de preguntas personalizados
- Diseño responsive y accesible
- Navegación por teclado

## Acceso

**En línea:** https://gitjdgt.github.io/Quiz-Trainer/

**Local:** Descarga el repositorio y abre `index.html` en tu navegador.

## Uso

### Banco de Preguntas de Prueba

La aplicación incluye un banco de preguntas de demostración en `data/questions.json`. Este banco es únicamente para verificar que la función de importación funciona correctamente. Puedes importar tus propios bancos de preguntas siguiendo las instrucciones a continuación.

### Importar Preguntas Personalizadas

1. Prepara un archivo JSON con el siguiente formato:
```json
[
    {
        "id": "q1",
        "statement": "¿Pregunta de ejemplo?",
        "options": [
            { "id": "a", "text": "Opción A" },
            { "id": "b", "text": "Opción B" },
            { "id": "c", "text": "Opción C" },
            { "id": "d", "text": "Opción D" }
        ],
        "correctAnswer": "b",
        "image": "imagen.png"
    }
]
```

2. Haz clic en **Importar**
3. Selecciona la carpeta que contiene el JSON y las imágenes (si las hay)
4. ¡Listo! Las preguntas se cargarán automáticamente

### Controles de Teclado

| Tecla | Acción |
|-------|--------|
| ↑ / ← | Opción anterior |
| ↓ / → | Opción siguiente |
| Enter | Confirmar respuesta / Siguiente pregunta |
| ESC x2 | Abortar quiz |

## Estructura del Proyecto

```
quiz-trainer/
├── assets/
│   └── question-banks/
│       └── images/          # Imágenes del banco por defecto
├── data/
│   └── questions.json       # Banco de preguntas de demostración
├── src/
│   ├── css/
│   │   └── styles.css       # Estilos de la aplicación
│   └── js/
│       ├── app.js           # Punto de entrada principal
│       ├── question-repository.js  # Gestión de preguntas
│       ├── questions-data.js       # Datos de preguntas
│       ├── quiz-engine.js          # Motor del quiz
│       ├── result-processor.js     # Procesamiento de resultados
│       ├── session-manager.js      # Gestión de sesión
│       └── ui.js                   # Interfaz de usuario
├── index.html               # Archivo principal
└── README.md                # Este archivo
```

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)
- Sin dependencias externas

## Navegadores Soportados

- Google Chrome (versión reciente)
- Microsoft Edge (versión reciente)
- Mozilla Firefox (versión reciente)

## Licencia

Este proyecto es de código abierto.
