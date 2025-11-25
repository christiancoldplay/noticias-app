# Noticias App

Una aplicación móvil moderna para gestionar noticias, desarrollada con **Ionic**, **Angular** y **Firebase**, que funciona tanto en web como en dispositivos Android nativos.

## Características

-  **Gestión completa de noticias** (crear, leer, eliminar)
-  **Interfaz nativa** con componentes Ionic
-  **Base de datos en tiempo real** con Firebase Firestore
-  **Multiplataforma** - Web y Android nativo
-  **Diseño responsive** adaptado a móviles
-  **Navegación por tabs** intuitiva

## Tecnologías Utilizadas

- **Ionic Framework** - UI components y herramientas móviles
- **Angular** - Framework principal con TypeScript
- **Firebase** - Backend y base de datos (Firestore)
- **Capacitor** - Puente para aplicaciones nativas
- **TypeScript** - Lenguaje de programación tipado

## Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** 
- **Android Studio** (para compilación Android)
- **Cuenta de Firebase**

## 🔧 Instalación y Configuración

# 1. Clonar el proyecto
```bash
git clone https://github.com/christiancoldplay/noticias-app.git
cd noticias-app

# 2. Instalar dependencias
npm install

# 3. Configuración Firebase
* Crear proyecto en Firebase Console
* Activar Firestore Database
* Crear la configuración de Firebase en src/environments/environment.ts

# 4. Ejecución 
* Version web 
ionic serve  
Abre http://localhost:8100 en el navegador

# 5. Version Android
# Configuración inicial (una vez)
npx cap init noticias-app com.zschristian.noticiasapp
npx cap add android
# Desarrollo (compila + sincroniza + ejecuta)
ionic cap run android
# Solo sincronizar cambios
ionic cap sync
# Solo abrir Android Studio
npx cap open android

##Autor: Christian Zamora - christiancoldplay (Github)
