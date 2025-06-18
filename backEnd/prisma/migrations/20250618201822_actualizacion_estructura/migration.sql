/*
  Warnings:

  - You are about to alter the column `estado` on the `pedido` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `estado` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(1))`.
  - You are about to alter the column `rol` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[slug]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigo]` on the table `Promocion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[productoId,promocionId]` on the table `PromoProducto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actualizadoEn` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadaEn` to the `Promocion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `consulta` ADD COLUMN `actualizadoEn` DATETIME(3) NOT NULL,
    ADD COLUMN `respuesta` VARCHAR(191) NULL,
    ADD COLUMN `resuelto` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `pedido` ADD COLUMN `actualizadoEn` DATETIME(3) NOT NULL,
    ADD COLUMN `direccionEnvio` VARCHAR(191) NULL,
    ADD COLUMN `notasInternas` VARCHAR(191) NULL,
    ADD COLUMN `total` DOUBLE NOT NULL DEFAULT 0.0,
    MODIFY `estado` ENUM('PENDIENTE', 'EN_PROCESO', 'LISTO_PARA_RETIRO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO') NOT NULL DEFAULT 'PENDIENTE';

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `actualizadoEn` DATETIME(3) NOT NULL,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `stock` INTEGER NOT NULL DEFAULT 0,
    MODIFY `estado` ENUM('ACTIVO', 'INACTIVO', 'ARCHIVADO') NOT NULL DEFAULT 'ACTIVO';

-- AlterTable
ALTER TABLE `promocion` ADD COLUMN `actualizadaEn` DATETIME(3) NOT NULL,
    ADD COLUMN `codigo` VARCHAR(191) NULL,
    ADD COLUMN `fechaFin` DATETIME(3) NULL,
    ADD COLUMN `fechaInicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `actualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `apellido` VARCHAR(191) NULL,
    ADD COLUMN `creadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `direccion` VARCHAR(191) NULL,
    ADD COLUMN `resetPasswordExpires` DATETIME(3) NULL,
    ADD COLUMN `resetPasswordToken` VARCHAR(191) NULL,
    ADD COLUMN `telefono` VARCHAR(191) NULL,
    MODIFY `rol` ENUM('ADMIN', 'CLIENTE', 'EMPLEADO') NOT NULL DEFAULT 'CLIENTE';

-- CreateIndex
CREATE UNIQUE INDEX `Producto_slug_key` ON `Producto`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Promocion_codigo_key` ON `Promocion`(`codigo`);

-- CreateIndex
CREATE UNIQUE INDEX `PromoProducto_productoId_promocionId_key` ON `PromoProducto`(`productoId`, `promocionId`);
