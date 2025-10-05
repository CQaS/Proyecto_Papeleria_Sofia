Papelería Sofía - Backend

Este es el backend del proyecto Papelería Sofía, una app web desarrollada en Node.js con Express, Prisma ORM y Zod, con almacenamiento de imágenes, autenticación JWT y utilidades de administración como logging y limpieza automática de archivos/promociones.

🚀 Tecnologías principales

Node.js + Express → Servidor HTTP

Prisma ORM → Acceso a base de datos MySQL

Zod → Validación de datos robusta

JWT → Autenticación de usuarios

Multer + Sharp → Subida y optimización de imágenes

Pino → Logging estructurado con salida en consola y archivo rotado

node-cron → Tareas automáticas (ej: limpieza de promociones vencidas)

🗂️ Estructura de carpetas

/controllers → Lógica de cada recurso (usuarios, productos, etc.)

/routes → Definición de endpoints Express

/services → Acceso a datos Prisma

/schemas → Esquemas de validación Zod

/middlewares → Autenticación, validación, manejo de imágenes

/libs → Prisma, JWT, mailer

/utils → Funciones reutilizables (manejarError, generarToken, logger, etc.)

/scripts → Tareas automáticas (ej: limpieza de promociones vencidas, limpieza de archivos huérfanos)

/public/imgs → Imágenes originales

/public/thumbs → Miniaturas generadas con Sharp

🔐 Autenticación

Registro y login con JWT

Contraseñas encriptadas con bcrypt

Middleware verificarToken y soloAdmin

Login devuelve token para usar en el frontend o REST Client

👤 Usuarios

CRUD completo

Roles: ADMIN, CLIENTE, EMPLEADO

Registro automático si un cliente realiza un pedido y no existe

Validación con Zod + Prisma

📂 Productos

Alta de productos con imágenes

Validación estricta con Zod

Subida de múltiples imágenes

Modelo ImagenProducto relacionado

Actualización parcial con imagen opcional

Enum CategoriaProducto definido en Prisma y consultado por el frontend

Eliminación lógica (estado), con limpieza automática de imágenes huérfanas en segundo plano

🚚 Pedidos

Crear pedidos junto con el usuario

Si el usuario no existe, se crea

Validación completa con Zod

Historial automático de cambios de estado (HistorialEstadoPedido)

Middleware $extends() intercepta updates y registra historial

📨 Consultas

Enviadas públicamente desde el frontend

Admin puede:

Marcar como leída

Marcar como resuelta

Responder

Validaciones con Zod y actualizaciones individuales

🎁 Promociones

Creación con múltiples imágenes y productos asociados

Tablas: Promocion, PromoProducto, ImagenPromocion

Validación de existencia, stock y estado de productos antes de asociar

Script programado con cron para eliminar automáticamente promociones vencidas

🔍 Endpoints de prueba (REST Client)

usuario.http, auth.http, consulta.http, pedido.http, producto.http

Formularios HTML (producto-crear.html, producto-editar.html, etc.) para crear y editar productos/promociones con imágenes

📄 Formularios HTML

producto-crear.html → Alta de productos (1 o varias imágenes)

producto-editar.html → Selección de producto + formulario precargado

✨ Extras

Validación de extensión y tamaño de imagen

Generación automática de thumbnails

Manejo centralizado de errores (manejarError())

Slug validado por expresión regular

Logs estructurados con Pino, salida en consola y archivo logs/app.log con rotación diaria

Scripts automáticos en /scripts para:

Eliminar archivos huérfanos no asociados a productos/promos

Eliminar promociones vencidas en horarios programados

📊 Modelos principales en Prisma

Usuario → con roles y autenticación

Producto + ImagenProducto

Promocion + ImagenPromocion + PromoProducto

Pedido + HistorialEstadoPedido

Consulta

⚙️ Configuración de entorno

Este proyecto utiliza variables de entorno para su configuración.
Antes de iniciar, copiá el archivo .env.example a .env y completá tus valores:

cp .env.example .env

Variables principales:

DATABASE_URL → conexión a MySQL

PORT → puerto donde corre Express

SALT → rounds de bcrypt

JWT_SECRET → clave para firmar tokens

CORS_ALLOWED_ORIGINS → orígenes permitidos para CORS

🔧 Desarrollo y Testing

REST Client en VSCode → archivos .http incluidos para probar endpoints fácilmente

Formularios HTML → mock frontend para pruebas de subida de imágenes y validaciones

Pruebas manuales con tokens → login devuelve JWT que se puede pegar en los headers

🚀 Despliegue

Configuración en .env para development y production

Logs rotados (logs/app.log) seguros para entornos productivos

Seguridad extra con Helmet y CORS configurados

💡 Buenas prácticas aplicadas

Código modular → controladores, servicios y capas bien separadas

Validaciones robustas → Zod en entrada/salida

Manejo de errores centralizado → manejarError()

Scripts automatizados → cero basura en la BD y sistema de archivos

Logs claros y estructurados con rotación automática

🚦 Roadmap

Implementar pruebas automatizadas (Jest/Vitest)

Subida de archivos PDF para pedidos personalizados de impresión

Migración futura del frontend a Next.js

Opciones de despliegue en Render/Heroku/Vercel con MySQL en la nube

Notificaciones por email con Nodemailer para pedidos/consultas

📦 Instalación
git clone https://github.com/CQaS/Proyecto_Papeleria_Sofia
cd Proyecto_Papeleria_Sofia
npm i

🛠️ Migraciones y base de datos

Para crear las tablas en tu base de datos MySQL:

npx prisma migrate dev

Si solo querés sincronizar sin historial de migraciones:

npx prisma db push

▶️ Ejecución
npm run devmon # Desarrollo con nodemon
npm start # Producción

<!-- Front-end -->

🛍️ Papelería SOFÍA — Frontend

El frontend de Papelería SOFÍA es una aplicación web moderna para una tienda en línea de papelería.
Está desarrollada con Next.js (App Router) y Tailwind CSS, y se conecta a un backend REST en:

Desarrollo: http://localhost:5000/api

Producción: https://api.papeleria-sofia.com/api

Las solicitudes HTTP se realizan con Axios, y la interfaz ofrece una experiencia visual alegre y responsiva, con colores vibrantes y la fuente Pacifico, evocando el ambiente de una papelería.

🚧 Estado Actual

El proyecto incluye varias páginas y componentes ya funcionales, con conexión real al backend y manejo de errores/estados de carga.

📄 Páginas y Componentes
🏠 Página Principal (app/page.js)

Muestra un banner con una imagen de fondo (public/images/stationery-store.jpg).

Incluye enlaces a:

Todos los productos (/productos)

Categorías específicas (/productos?categoria=LAPICES, /productos?categoria=CUADERNOS)

Usa la fuente Pacifico y el color primario #2563eb.

🛒 Página de Productos (app/productos/page.js)

Server Component con múltiples vistas dinámicas:

/productos: lista general de productos y promociones.

/productos?categoria=X: filtrado por categoría.

/productos?id=X: detalle de producto.

/productos?idPromo=X: detalle de promoción.

Características:

Muestra imágenes, nombre, precio, descripción, stock y categoría.

En promociones: título, descripción, fecha de vencimiento (📅 dd/mm/aaaa), productos incluidos y enlace a detalle.

Usa Suspense con loading.jsx y manejo de errores de API.

🧷 Sección de Categorías (app/ProductosCategoriasSection.jsx)

Server Component que:

Muestra productos filtrados por categoría (?categoria=ÚTILES_ESCOLARES) o, si no hay categoría:

Renderiza tres secciones:

Útiles Escolares

Papelería General

Artículos de Oficina

Con un máximo de 4 productos por sección.

Incluye manejo de errores y estados vacíos.

Usa Suspense para loading.jsx.

🎁 Sección de Promociones (app/PromocionSeccion.jsx)

Server Component que:

Lista promociones activas desde /promocion/lista_promociones.

Muestra mensaje cuando no hay promociones.

Maneja errores de conexión y estados vacíos.

🧩 Componentes principales

ProductCard.js → Muestra imagen (optimizada con next/image), nombre, precio y enlace al detalle.
Estilo: borde, sombra y transición suave.

PromoCard.js → Imagen, título, descripción, fecha (dd/mm/aaaa), productos incluidos y enlace.

BackButton.js → Client Component con useRouter para volver a /productos.

loading.jsx → Animación temática con lápiz girando, colores pastel (yellow-200, pink-200) y texto “Preparando tu papelería...” ✏️

🔌 API (lib/api.js)

Funciones para interactuar con el backend:

Método Endpoint Descripción
GET /productos Lista todos los productos
GET /producto/categorias/:categoria Filtra por categoría
GET /producto_id/:id Detalle de producto
GET /promocion/lista_promociones Lista promociones
GET /promocion_id/:id Detalle de promoción
POST /auth/login Autenticación
POST /productos Crear producto (multipart/form-data)

Configuración:

Usa NEXT_PUBLIC_API_URL y soporte para tokens de autenticación.

⚙️ Configuración del Proyecto
next.config.js

Permite imágenes remotas desde /imgs/** y /promos/**.

.env.local
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_PROTOCOL=http
NEXT_PUBLIC_API_HOST=localhost
NEXT_PUBLIC_API_PORT=5000

🧩 Problemas Resueltos

✅ Evitado bucle infinito en renderizados con Server Components
✅ Manejo seguro de searchParams (validación con typeof)
✅ Formato de fechas dd/mm/aaaa
✅ Soporte de imágenes remotas configurado
✅ Botón “Iniciar sesión” visible y con transición
✅ Color primario definido y aplicado globalmente

🚀 Instrucciones de Ejecución

Instalar dependencias:

npm install

Configurar entorno:

Crear archivo .env.local

Guardar stationery-store.jpg en public/images/

Ejecutar en modo desarrollo:

npm run dev

Abrir en el navegador:

http://localhost:3000
