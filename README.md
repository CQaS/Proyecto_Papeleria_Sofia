# 🛍️ Papelería Sofía

Sistema completo de gestión y e-commerce para papelería, desarrollado con tecnologías modernas y escalables.

## 📋 Tabla de Contenidos

- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [API Reference](#-api-reference)
- [Roadmap](#-roadmap)

---

## ✨ Características Principales

### Backend

- 🔐 **Autenticación y autorización** con JWT y roles (Admin, Cliente, Empleado)
- 📦 **Gestión completa de productos** con categorías y múltiples imágenes
- 🎁 **Sistema de promociones** con productos asociados y vencimiento automático
- 🚚 **Gestión de pedidos** con historial de estados
- 📨 **Sistema de consultas** públicas con panel de administración
- 🖼️ **Optimización de imágenes** automática con generación de thumbnails
- 📊 **Logging estructurado** con rotación de archivos
- 🤖 **Tareas automatizadas** con cron jobs
- ♻️ **Limpieza automática** de archivos huérfanos y promociones vencidas

### Frontend

- 🎨 **Interfaz moderna y responsiva** con Tailwind CSS
- ⚡ **Rendimiento optimizado** con Next.js App Router
- 🔍 **Filtrado dinámico** por categorías
- 🖼️ **Optimización de imágenes** con next/image
- 📱 **Diseño mobile-first** completamente responsive
- 🎯 **Estados de carga** y manejo de errores elegante

---

## 🛠️ Stack Tecnológico

### Backend

| Tecnología            | Propósito                         |
| --------------------- | --------------------------------- |
| **Node.js + Express** | Servidor HTTP y API REST          |
| **Prisma ORM**        | Acceso y gestión de base de datos |
| **PostgreSQL**        | Base de datos relacional          |
| **Zod**               | Validación de esquemas y tipos    |
| **JWT + bcrypt**      | Autenticación y seguridad         |
| **Multer + Sharp**    | Procesamiento de imágenes         |
| **Pino**              | Sistema de logging                |
| **node-cron**         | Tareas programadas                |
| **Helmet + CORS**     | Seguridad HTTP                    |

### Frontend

| Tecnología         | Propósito                      |
| ------------------ | ------------------------------ |
| **Next.js 14**     | Framework React con App Router |
| **Tailwind CSS**   | Estilos y diseño responsivo    |
| **Axios**          | Cliente HTTP                   |
| **React Suspense** | Estados de carga               |

---

## 📁 Arquitectura del Proyecto

### Backend (`/backend`)

```
backend/
├── controllers/      # Lógica de negocio por recurso
├── routes/          # Definición de endpoints
├── services/        # Capa de acceso a datos (Prisma)
├── schemas/         # Validaciones Zod
├── middlewares/     # Auth, validación, imágenes
├── libs/            # Prisma, JWT, mailer
├── utils/           # Funciones auxiliares
├── scripts/         # Tareas automáticas
├── public/
│   ├── imgs/        # Imágenes originales
│   └── thumbs/      # Miniaturas optimizadas
└── logs/            # Archivos de registro
```

### Frontend (`/frontend`)

```
frontend/
├── app/
│   ├── page.js              # Página principal
│   ├── productos/           # Catálogo y detalles
│   ├── loading.jsx          # Estado de carga global
│   └── components/          # Componentes reutilizables
├── lib/
│   └── api.js              # Cliente HTTP configurado
└── public/
    └── images/             # Recursos estáticos
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js >= 18.x
- PostgreSQL >= 14.x
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone https://github.com/CQaS/Proyecto_Papeleria_Sofia
cd Proyecto_Papeleria_Sofia
```

2. **Instalar dependencias del backend**

```bash
cd backend
npm install
```

3. **Instalar dependencias del frontend**

```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuración

### Backend

1. Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

2. Configurar variables de entorno en `.env`:

```env
# Base de datos
DATABASE_URL="postgresql://usuario:password@localhost:5432/papeleria_sofia"

# Servidor
PORT=5000
NODE_ENV=development

# Seguridad
JWT_SECRET=tu_clave_secreta_muy_segura
SALT=10

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,https://papeleria-sofia.com

# Email (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-password
```

3. Ejecutar migraciones:

```bash
npx prisma migrate dev
```

O sincronizar sin historial:

```bash
npx prisma db push
```

### Frontend

1. Crear archivo `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_PROTOCOL=http
NEXT_PUBLIC_API_HOST=localhost
NEXT_PUBLIC_API_PORT=5000
```

2. Agregar imagen de banner:

Coloca `stationery-store.jpg` en `public/images/`

---

## 💻 Uso

### Iniciar Backend

**Desarrollo:**

```bash
npm run devmon
```

**Producción:**

```bash
npm start
```

El servidor estará disponible en `http://localhost:5000`

### Iniciar Frontend

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Testing con REST Client

El proyecto incluye archivos `.http` para testing:

- `usuario.http` - Operaciones CRUD de usuarios
- `auth.http` - Login y autenticación
- `producto.http` - Gestión de productos
- `pedido.http` - Creación y gestión de pedidos
- `consulta.http` - Sistema de consultas

### Formularios HTML de Prueba

Disponibles en `/public/html/`:

- `producto-crear.html` - Alta de productos con imágenes
- `producto-editar.html` - Edición de productos existentes
- `promocion-crear.html` - Creación de promociones

---

## 📡 API Reference

### Autenticación

```http
POST /api/auth/register
POST /api/auth/login
```

### Productos

```http
GET    /api/productos
GET    /api/producto_id/:id
GET    /api/producto/categorias/:categoria
POST   /api/productos          # Requiere: Admin
PUT    /api/productos/:id      # Requiere: Admin
DELETE /api/productos/:id      # Requiere: Admin (soft delete)
```

### Promociones

```http
GET    /api/promocion/lista_promociones
GET    /api/promocion_id/:id
POST   /api/promociones        # Requiere: Admin
PUT    /api/promociones/:id    # Requiere: Admin
DELETE /api/promociones/:id    # Requiere: Admin
```

### Pedidos

```http
GET    /api/pedidos            # Requiere: Auth
GET    /api/pedidos/:id        # Requiere: Auth
POST   /api/pedidos
PUT    /api/pedidos/:id        # Requiere: Admin
```

### Consultas

```http
GET    /api/consultas          # Requiere: Admin
POST   /api/consultas          # Público
PUT    /api/consultas/:id      # Requiere: Admin
```

---

## 🗄️ Modelos de Base de Datos

### Usuario

- Sistema de roles (ADMIN, CLIENTE, EMPLEADO)
- Autenticación con bcrypt
- Creación automática en primer pedido

### Producto

- Categorías predefinidas (enum)
- Múltiples imágenes por producto
- Soft delete con limpieza automática

### Promoción

- Asociación con múltiples productos
- Validación de stock y estado
- Eliminación automática al vencer

### Pedido

- Historial automático de estados
- Creación de usuario si no existe
- Validación completa de datos

### Consulta

- Envío público desde frontend
- Estados: leída, resuelta
- Sistema de respuestas

---

## 🔒 Seguridad

- ✅ Contraseñas encriptadas con bcrypt
- ✅ Tokens JWT con expiración
- ✅ Middleware de autenticación y autorización
- ✅ Validación estricta con Zod
- ✅ Helmet para headers seguros
- ✅ CORS configurado por origen
- ✅ Sanitización de inputs
- ✅ Rate limiting en archivos

---

## 🤖 Tareas Automatizadas

El sistema ejecuta automáticamente:

- **Limpieza de promociones vencidas** - Diaria a las 2:00 AM
- **Eliminación de archivos huérfanos** - Semanal los domingos
- **Rotación de logs** - Diaria automática
- **Actualización de estado de pedidos** - En tiempo real

---

## 🎯 Roadmap

### Corto Plazo

- [ ] Implementar tests automatizados (Jest/Vitest)
- [ ] Sistema de notificaciones por email
- [ ] Panel de administración completo

### Mediano Plazo

- [ ] Búsqueda avanzada con filtros

---

## 📝 Licencia

Este proyecto es privado y pertenece a Papelería Sofía.

---

## 👥 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

**Equipo de Desarrollo**

- GitHub: [@CQaS](https://github.com/CQaS)
- Email: cqasss@gmail.com

---

**Última actualización:** Octubre 2025
