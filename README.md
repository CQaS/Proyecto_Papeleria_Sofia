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

Papelería SOFÍA - Frontend

El frontend de Papelería SOFÍA es una aplicación web para una tienda en línea de papelería, desarrollada con Next.js (App Router) y Tailwind CSS. Se conecta a un backend en http://localhost:5000/api (desarrollo) o https://api.papeleria-sofia.com/api (producción) usando Axios para solicitudes HTTP. La aplicación muestra productos y promociones, con un diseño responsivo y temático (colores vibrantes, fuente Pacifico) enfocado en la experiencia de una papelería.

Estado actual

Páginas y componentes

Página principal (app/page.js): Muestra un banner con una imagen de fondo (public/images/stationery-store.jpg) y enlaces a productos (/productos), categorías específicas (/productos?categoria=LAPICES, /productos?categoria=CUADERNOS). Usa fuente Pacifico y color primary (#2563eb) para el título.
Página de productos (app/productos/page.js): Server Component que maneja múltiples vistas:

Lista general (/productos): Muestra todos los productos y promociones.
Filtrado por categoría (/productos?categoria=X): Muestra productos de una categoría específica.
Detalle de producto (/productos?id=X): Muestra imágenes, nombre, precio, descripción, stock y categoría.
Detalle de promoción (/productos?idPromo=X): Muestra una imagen, título, descripción, fecha de vencimiento (formateada como dd/mm/aaaa), productos incluidos y enlace a detalles.
Usa Suspense para mostrar un componente de carga (loading.jsx) y maneja errores de la API.

Sección de categorías (app/ProductosCategoriasSection.jsx): Server Component que:

Si hay categoría en searchParams (ej. ?categoria=ÚTILES_ESCOLARES), muestra solo productos de esa categoría.
Si no hay categoría, muestra tres secciones (Útiles Escolares, Papelería General, Artículos de Oficina) con un máximo de 4 productos cada una.
Maneja errores y listas vacías, usa Suspense para loading.jsx.

Sección de promociones (app/PromocionSeccion.jsx): Server Component que lista promociones activas desde /promocion/lista_promociones, con manejo de errores y mensaje para listas vacías.
Componentes:

ProductCard.js: Muestra una imagen (optimizada con Image de Next.js), nombre, precio y enlace a detalle. Estilo con borde, sombra y transición suave.
PromoCard.js: Muestra una imagen, título, descripción, fecha (dd/mm/aaaa), productos incluidos y enlace a detalle.
BackButton.js: Client Component con useRouter para navegar a /productos.
loading.jsx: Client Component temático con un lápiz girando, cuadernos en colores (yellow-200, pink-200) y texto animado ("Preparando tu papelería...").

API (lib/api.js)
Funciones para interactuar con el backend:

GET /productos: Lista todos los productos.
GET /producto/categorias/:categoria: Filtra por categoría.
GET /producto_id/:id: Detalle de producto.
GET /promocion/lista_promociones: Lista promociones.
GET /promocion_id/:id: Detalle de promoción.
POST /auth/login: Autenticación.
POST /productos: Crear producto (multipart/form-data).
Configurado con NEXT_PUBLIC_API_URL y soporte para tokens de autenticación.

Configuración

next.config.js: Permite imágenes remotas desde /imgs/** y /promos/** usando variables de entorno (NEXT_PUBLIC_API_PROTOCOL, NEXT_PUBLIC_API_HOST, NEXT_PUBLIC_API_PORT).
tailwind.config.js: Define primary (#2563eb), borderRadius.button (0.375rem) y fontFamily.pacifico.
globals.css: Importa fuente Pacifico desde Google Fonts.
.env.local:

textNEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_API_PROTOCOL=http
NEXT_PUBLIC_API_HOST=localhost
NEXT_PUBLIC_API_PORT=5000
Estilo

Colores: primary (#2563eb), text-gray-600, text-green-600 (stock, fechas), text-red-600 (errores).
Fuentes: Pacifico para títulos, sans-serif para textos.
Transiciones: duration-500 en botones, duration-300 en cards.
Responsividad: Grillas adaptables (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 o 4).

Problemas resueltos

Bucle infinito: Usando Server Components.
Error searchParams: Manejo seguro con typeof.
Fechas: Formato dd/mm/aaaa.
Imágenes: Una por promoción, configuradas en next.config.js.
Botón "Iniciar sesión": Visible en todas las pantallas, con transición.
Color primary: Definido en Tailwind.

Instrucciones

Instalar dependencias:

npm install

Configurar .env.local y guardar stationery-store.jpg en public/images/.

Ejecutar en desarrollo:

npm run dev
Acceder a http://localhost:3000.
