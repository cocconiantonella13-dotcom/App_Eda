# 👴👵 APP ABUELOS (App Eda)
### Aplicación Accesible de Botón Grande y Carnet de Salud para Adultos Mayores

[![GitHub Pages](https://img.shields.io/badge/Demo_Online-Disponible-success?style=for-the-badge&logo=github&logoColor=white)](https://cocconiantonella13-dotcom.github.io/App_Eda/)
[![PWA Ready](https://img.shields.io/badge/PWA-Instalable_Offline-0d9488?style=for-the-badge&logo=pwa&logoColor=white)](https://cocconiantonella13-dotcom.github.io/App_Eda/)
[![Mobile Friendly](https://img.shields.io/badge/Mobile-100%25_Responsive-blue?style=for-the-badge&logo=android&logoColor=white)](https://cocconiantonella13-dotcom.github.io/App_Eda/)
[![A11y](https://img.shields.io/badge/Accesibilidad-Alta_Visibilidad-orange?style=for-the-badge)](https://cocconiantonella13-dotcom.github.io/App_Eda/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-purple?style=for-the-badge)](LICENSE)

---

## 🚀 Enlace Directo para Abrir la Aplicación

> ### 🌐 [👉 ¡TOCA AQUÍ PARA ABRIR LA APLICACIÓN EN VIVO!](https://cocconiantonella13-dotcom.github.io/App_Eda/)

---

## 📖 Acerca del Proyecto

**APP ABUELOS (App Eda)** es una Aplicación Web Progresiva (**PWA**) diseñada especialmente para **adultos mayores y personas con dificultades visuales o motrices**. Su propósito es ofrecer una interfaz clara, intuitiva y con botones gigantes para comunicarse con familiares, pedir auxilio inmediato en emergencias médicas y consultar el carnet de salud con datos clínicos esenciales.

---

## ✨ Características Principales

| Característica | Descripción |
| :--- | :--- |
| 📞 **Llamadas Rápidas en 1 Toque** | Botones de gran visibilidad con nombres claros para llamar directamente a hijos y hermanos sin entrar a menús complicados. |
| 🚨 **Llamado Rápido a Emergencias** | Acceso inmediato a la ambulancia (**107 / Vittal**), hospital o clínica de cabecera (**Hospital Italiano**) y médico particular. |
| 🪪 **Carnet Digital de Salud** | Ficha médica siempre a la vista con Obra Social/Prepaga (PAMI), DNI, grupo sanguíneo, alergias y medicación habitual. |
| ⚙️ **Panel de Configuración Familiar** | Menú accesible con el ícono de engranaje (⚙️) para modificar nombres, teléfonos y datos médicos guardándolos de forma segura en el celular (`localStorage`). |
| 📱 **Tecnología PWA (Instalable)** | Se puede añadir a la pantalla de inicio del celular como una app nativa, sin ocupar espacio innecesario ni depender de tiendas de apps. |
| 📶 **Soporte Offline** | Gracias a su Service Worker, la información y el carnet de salud funcionan perfectamente incluso sin señal o sin internet. |
| 👁️ **Diseño Accesible (A11y)** | Tipografía de gran tamaño, contraste visual alto, botones con respuesta táctil y sin distracciones ni publicidad. |

---

## 📱 ¿Cómo Instalar la App en el Celular?

La aplicación puede utilizarse directamente en cualquier navegador o instalarse en la pantalla de inicio del teléfono:

### 🤖 En Celulares Android (Google Chrome)
1. Abre el enlace: [https://cocconiantonella13-dotcom.github.io/App_Eda/](https://cocconiantonella13-dotcom.github.io/App_Eda/)
2. Presiona el botón amarillo **"📱 Instalar App"** en la parte superior, o toca los **tres puntos verticales (⋮)** en la esquina superior derecha del navegador.
3. Elige **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.
4. ¡Listo! Tendrás el ícono de **APP ABUELOS** listo para abrir con un toque.

### 🍏 En iPhone / iPad (Safari)
1. Abre el enlace en Safari: [https://cocconiantonella13-dotcom.github.io/App_Eda/](https://cocconiantonella13-dotcom.github.io/App_Eda/)
2. Presiona el botón **Compartir** 📤 *(ícono cuadrado con una flecha hacia arriba)* en la barra inferior.
3. Desliza hacia abajo en las opciones y selecciona **"Agregar al inicio" (➕)**.
4. Presiona **"Agregar"** en la esquina superior derecha.

---

## 🛠️ ¿Cómo Activar GitHub Pages?

Para habilitar la aplicación en GitHub Pages desde la rama `main`:

1. Ve a tu repositorio en GitHub: [https://github.com/cocconiantonella13-dotcom/App_Eda](https://github.com/cocconiantonella13-dotcom/App_Eda)
2. Haz clic en la pestaña **Settings** (Configuración) arriba a la derecha.
3. En la barra lateral izquierda, entra en la sección **Pages**.
4. En el apartado **Build and deployment**:
   - **Source:** Selecciona `Deploy from a branch`.
   - **Branch:** Elige la rama `main` y la carpeta `/(root)`.
   - Haz clic en **Save** (Guardar).
5. Espera unos instantes y actualiza la página. La aplicación estará publicada y lista en:
   👉 **`https://cocconiantonella13-dotcom.github.io/App_Eda/`**

---

## 📂 Estructura del Repositorio

Todos los archivos de la aplicación están ubicados directamente en la raíz para garantizar la máxima compatibilidad con GitHub Pages:

```text
App_Eda/
├── index.html              # Aplicación Web principal (HTML5 + Tailwind CSS + JS)
├── manifest.json           # Manifiesto PWA para instalación en Android e iOS
├── sw.js                   # Service Worker para caché y funcionamiento offline
├── icon-192.png            # Icono de la app en alta resolución (192x192)
├── icon-512.png            # Icono de la app en alta resolución (512x512)
├── README.md               # Documentación completa y enlaces del proyecto
├── .gitignore              # Archivos temporales ignorados por Git
├── server.ps1              # Servidor local ligero para pruebas en Windows
└── create-icons.js         # Script auxiliar
```

---

## 💻 Ejecución Local (Opcional)

Si deseas probar la aplicación localmente en tu computadora:

1. Ejecuta el archivo `server.ps1` con PowerShell:
   ```powershell
   .\server.ps1
   ```
2. Abre tu navegador e ingresa a:
   ```text
   http://localhost:8080/
   ```

---

## 💡 Tecnologías Empleadas

- **HTML5 Semántico**: Máxima accesibilidad y compatibilidad.
- **Tailwind CSS**: Diseño adaptable y accesible con paleta de alto contraste.
- **JavaScript Vanilla (ES6+)**: Funcionamiento instantáneo y sin sobrecarga de librerías.
- **Web App Manifest**: Compatibilidad nativa como Progressive Web App (PWA).
- **Service Workers Cache API**: Carga ultrarrápida y uso sin conexión a internet.
- **LocalStorage API**: Guardado persistente y seguro de números y datos médicos.

---

## 👤 Créditos y Autoría

Desarrollado con cariño para facilitar la comunicación y el cuidado de los adultos mayores de la familia.

- **Repositorio oficial**: [cocconiantonella13-dotcom/App_Eda](https://github.com/cocconiantonella13-dotcom/App_Eda)