# Magadigital Frontend

Este proyecto es el frontend para la prueba técnica de Megadigital, diseñado para interactuar con el backend previamente configurado. Está construido con React y utiliza Vite como herramienta de construcción y desarrollo.

## Tecnologías Utilizadas

- React
- Vite
- React Router Dom
- Axios
- Tailwind CSS

## Configuración Inicial

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio:**

```bash
git clone <URL del repositorio frontend>
```

2. **Instalar las dependencias:**

Dentro del directorio del proyecto, ejecuta:

```bash
npm install
```

3. **Configuración de Variables de Entorno:**

Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias, por ejemplo, la URL del backend:

```env
VITE_BACKEND_URL=<URL del backend>
```

4. **Ejecutar el proyecto:**

Para iniciar el servidor de desarrollo, utiliza:

```bash
npm run dev
```

## Uso

Una vez que el servidor de desarrollo está en funcionamiento, puedes acceder al proyecto a través de `http://localhost:5173` (o el puerto configurado en Vite).

### Navegación

El proyecto incluye las siguientes páginas y rutas:

- `/` - Página de inicio.
- `/registrar` - Página para crear una nueva cuenta.
- `/home` - Página de inicio después de iniciar sesión, protegida y solo accesible para usuarios autenticados.

## Licencia

Este proyecto está bajo la licencia MIT.

```

Este contenido incluye instrucciones para clonar el repositorio, instalar dependencias, configurar variables de entorno, ejecutar el proyecto, y una breve descripción de la navegación en el frontend.
```
