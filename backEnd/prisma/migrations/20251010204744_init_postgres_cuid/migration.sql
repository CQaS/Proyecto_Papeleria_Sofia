-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('ADMIN', 'EMPLEADO', 'CLIENTE');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'LISTO_PARA_RETIRO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "EstadoProducto" AS ENUM ('ACTIVO', 'INACTIVO', 'ARCHIVADO');

-- CreateEnum
CREATE TYPE "EstadoUsuario" AS ENUM ('ACTIVO', 'INACTIVO', 'PENDIENTE', 'BLOQUEADO');

-- CreateEnum
CREATE TYPE "CategoriaProducto" AS ENUM ('CUADERNOS', 'LAPICES', 'FIBRONES', 'MOCHILAS', 'HOJAS', 'IMPRESIONES', 'PLASTILINAS', 'REGLAS', 'OTROS');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100),
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255),
    "rol" "RolUsuario" NOT NULL DEFAULT 'CLIENTE',
    "telefono" VARCHAR(20),
    "direccion" VARCHAR(255),
    "estado" "EstadoUsuario" NOT NULL DEFAULT 'ACTIVO',
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "resetPasswordToken" TEXT,
    "resetPasswordExpires" TIMESTAMP(3),

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiraEn" TIMESTAMP(3) NOT NULL,
    "usado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "slug" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoria" "CategoriaProducto" NOT NULL DEFAULT 'OTROS',
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoProducto" NOT NULL DEFAULT 'ACTIVO',

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagenProducto" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "esPrincipal" BOOLEAN NOT NULL DEFAULT false,
    "productoId" TEXT NOT NULL,

    CONSTRAINT "ImagenProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Promocion" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(100) NOT NULL,
    "codigo" TEXT,
    "descripcion" TEXT,
    "fechaInicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaFin" TIMESTAMP(3),
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "creadaEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadaEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Promocion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromoProducto" (
    "id" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "promocionId" TEXT NOT NULL,

    CONSTRAINT "PromoProducto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagenPromocion" (
    "id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "promocionId" TEXT NOT NULL,

    CONSTRAINT "ImagenPromocion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "archivoUrl" TEXT NOT NULL,
    "detalles" TEXT,
    "estado" "EstadoPedido" NOT NULL DEFAULT 'PENDIENTE',
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "direccionEnvio" VARCHAR(255),
    "notasInternas" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistorialEstadoPedido" (
    "id" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "estadoAnterior" "EstadoPedido" NOT NULL,
    "estadoNuevo" "EstadoPedido" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cambiadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cambiadoPor" TEXT,

    CONSTRAINT "HistorialEstadoPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" TEXT NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "mensaje" TEXT NOT NULL,
    "respuesta" TEXT,
    "leido" BOOLEAN NOT NULL DEFAULT false,
    "resuelto" BOOLEAN NOT NULL DEFAULT false,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefono_key" ON "Usuario"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_slug_key" ON "Producto"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Promocion_codigo_key" ON "Promocion"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "PromoProducto_productoId_promocionId_key" ON "PromoProducto"("productoId", "promocionId");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenProducto" ADD CONSTRAINT "ImagenProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromoProducto" ADD CONSTRAINT "PromoProducto_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromoProducto" ADD CONSTRAINT "PromoProducto_promocionId_fkey" FOREIGN KEY ("promocionId") REFERENCES "Promocion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagenPromocion" ADD CONSTRAINT "ImagenPromocion_promocionId_fkey" FOREIGN KEY ("promocionId") REFERENCES "Promocion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialEstadoPedido" ADD CONSTRAINT "HistorialEstadoPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
