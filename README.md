# Proyecto: Buscador de Películas

Este es un proyecto desarrollado en **React** que permite buscar películas a través de una API externa y visualizar información detallada sobre ellas.

## 🚀 Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**
Ejecuta el siguiente comando en la terminal:
```sh
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd nombre-del-repositorio
```

### 2️⃣ **Instalar Dependencias**
Asegúrate de tener **Node.js** instalado y ejecuta:
```sh
npm install
```

### 3️⃣ **Configurar Variables de Entorno**
Crea un archivo `.env` en la raíz del proyecto y agrega:
```
VITE_API_KEY=tu_api_key
VITE_API_HOST=api.watchmode.com
```

### 4️⃣ **Ejecutar el Proyecto**
Para iniciar la aplicación en modo desarrollo:
```sh
npm run dev
```
Luego, abre el navegador en: [http://localhost:5173](http://localhost:5173)

## 📂 Estructura del Proyecto
```
📁 src/
 ├── 📁 api/              # Llamadas a la API
 ├── 📁 components/       # Componentes reutilizables
 ├── 📁 assets/           # Estilos y archivos estáticos
 ├── 📄 App.jsx           # Componente principal
 ├── 📄 main.jsx          # Punto de entrada de React
 ├── 📄 styles.css        # Estilos globales
```

## 🛠️ Tecnologías Utilizadas
- **React** (Hooks: `useState`, `useEffect`, `useCallback`)
- **React Router** para la navegación
- **Bootstrap** para estilos
- **Vite** como entorno de desarrollo

## 🎬 Funcionalidades
✔️ Búsqueda de películas por nombre  
✔️ Visualización de detalles de una película  
✔️ Redirección automática al listado tras una nueva búsqueda  
✔️ Integración con la API de **Watchmode**  
✔️ Manejo de errores con `ErrorBoundary`  

## 📌 Notas Adicionales
- La API utilizada requiere una clave (`API Key`) válida para funcionar.
- Si experimentas problemas con la API, revisa la consola para obtener detalles de los errores.

---
✉️ **Para consultas o contribuciones:** crea un _Issue_ en el repositorio. ¡Gracias por tu interés en el proyecto! 🚀
