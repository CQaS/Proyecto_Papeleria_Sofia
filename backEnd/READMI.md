# Papelería Sofía - Backend

Este es el backend del proyecto **Papelería Sofía**, una app web desarrollada en Node.js con Express, Prisma ORM y Zod, con almacenamiento de imágenes y autenticación JWT.

---

## 🚀 Tecnologías principales

* **Node.js + Express** - Servidor HTTP
* **Prisma ORM** - Acceso a base de datos MySQL
* **Zod** - Validación de datos robusta
* **JWT** - Autenticación de usuarios
* **Multer + Sharp** - Subida y optimización de imágenes

---

## 🗂️ Estructura de carpetas

* `/controllers` - Lógica de cada recurso (usuarios, productos, etc.)
* `/routes` - Definición de endpoints Express
* `/services` - Acceso a datos Prisma
* `/schemas` - Esquemas de validación Zod
* `/middlewares` - Autenticación, validación, manejo de imágenes
* `/libs` - Prisma, JWT
* `/utils` - Funciones reutilizables como `manejarError`
* `/public/imgs` - Imágenes originales
* `/public/thumbs` - Miniaturas generadas con Sharp

---

## 🔐 Autenticación

* Registro y login con JWT
* Contraseñas encriptadas con bcrypt
* Middleware `verificarToken` y `soloAdmin`
* Login devuelve token para usar en el frontend o REST Client

---

## 👤 Usuarios

* CRUD completo
* Roles: `ADMIN`, `CLIENTE`, `EMPLEADO`
* Registro automático si un cliente realiza un pedido y no existe
* Validación con Zod + Prisma

---

## 📂 Productos

* Alta de productos con imágenes
* Validación estricta con Zod
* Subida de múltiples imágenes
* Modelo `ImagenProducto` relacionado
* Actualización parcial con imagen opcional
* Enum `CategoriaProducto` definido en Prisma y consultado por el frontend

---

## 🚚 Pedidos

* Crear pedidos junto con el usuario
* Si el usuario no existe, se crea
* Validación completa con Zod
* Historial automático de cambios de estado (`HistorialEstadoPedido`)
* Middleware `$extends()` intercepta updates y registra historial

---

## 📨 Consultas

* Enviadas públicamente desde el frontend
* Admin puede:

  * Marcar como leída
  * Marcar como resuelta
  * Responder
* Validaciones con Zod y actualizaciones individuales

---

## 🎁 Promociones

* Creación con múltiples imágenes y productos asociados
* Tablas: `Promocion`, `PromoProducto`, `ImagenPromocion`
* Validación de existencia, stock y estado de productos antes de asociar

---

## 🔍 Endpoints de prueba (REST Client)

* `usuario.http`, `auth.http`, `consulta.http`, `pedido.http`, `producto.http`
* Se usan formularios HTML para crear y editar productos/promociones con imágenes

---

## 📄 Formularios HTML

* `producto-crear.html` → Alta de productos (1 o varias imágenes)
* `producto-editar.html` → Selección de producto + formulario precargado

---

## ✨ Extras

* Validación de extensión y tamaño de imagen
* Generación automática de thumbnails
* Manejo centralizado de errores (`manejarError()`)
* Slug validado por expresión regular

---