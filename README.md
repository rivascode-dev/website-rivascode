# rivascode.dev - Personal Portfolio & AI Solutions

Bienvenido al repositorio oficial de **rivascode.dev**, un sitio web profesional diseñado para mostrar soluciones tecnológicas avanzadas, con un enfoque especial en la integración de Inteligencia Artificial (IA), desarrollo IIoT y diseño de experiencias premium.

![rivascode.dev logo](/public/assets/logos/logo-rivascode-small.png)

## 🚀 Propósito del Proyecto

Este sitio no solo sirve como portafolio personal, sino como una vitrina de capacidades técnicas en:
- **Desarrollo Web Moderno**: Interfaces rápidas, seguras y altamente responsivas.
- **Inteligencia Artificial Generativa**: Implementación de arquitecturas RAG (Retrieval-Augmented Generation) para optimizar la interacción con el usuario.
- **Soluciones Industriales (IIoT)**: Plataformas avanzadas para el monitoreo y control en tiempo real (LogOS).

## 🛠️ Stack Tecnológico

El proyecto está construido sobre un stack de última generación, optimizado para el rendimiento y la escalabilidad:

- **Core**: [Next.js 16 (Turbopack)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Styling & UI**: [Material UI (MUI)](https://mui.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Manejo de Formularios**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email Service**: [Resend](https://resend.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)

## ✨ Características Principales

1. **Diseño Premium**: Estética moderna con efectos de glassmorphism, gradientes vibrantes y micro-animaciones fluidas.
2. **Navegación Inteligente**: Menú responsive optimizado para dispositivos móviles con gestión de estado avanzada.
3. **Formulario de Contacto Resiliente**: Validación estricta con Zod y envío de correos automatizado a través de Server Actions.
4. **Sección de Proyectos Dinámica**: Filtrado y visualización de proyectos con modales informativos detallados.
5. **Arquitectura RAG**: Demostración de capacidades de IA integradas directamente en el flujo de usuario.

## 📦 Instalación y Desarrollo

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rivascode-dev/website-rivascode.git
   cd website-rivascode
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   # o alternativamente: npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env.local` en la raíz del proyecto y añade tus llaves:
   ```env
   RESEND_API_KEY=re_your_api_key
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

## 🏗️ Estructura del Proyecto

- `src/sections/`: Componentes principales de la página agrupados por secciones (Hero, Proyects, Contact, etc.).
- `src/data/`: Fuente de verdad centralizada para proyectos, tecnologías y datos de contacto.
- `src/actions/`: Server Actions para lógica fuera del cliente (ej. `sendEmail.ts`).
- `src/schemas/`: Esquemas de validación de datos con Zod.
- `src/theme/`: Configuración personalizada del tema de Material UI.

## 📄 Licencia

Este proyecto es privado y todos los derechos están reservados.

---
Desarrollado con ❤️ por **[rivascode.dev](https://rivascode.dev)**
