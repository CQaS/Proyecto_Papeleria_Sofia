/*
  Warnings:

  - You are about to alter the column `nombre` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `titulo` on the `promocion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nombre` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `apellido` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `telefono` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `consulta` MODIFY `mensaje` TEXT NOT NULL,
    MODIFY `respuesta` TEXT NULL;

-- AlterTable
ALTER TABLE `pedido` MODIFY `detalles` TEXT NULL,
    MODIFY `direccionEnvio` VARCHAR(255) NULL,
    MODIFY `notasInternas` TEXT NULL;

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `categoria` VARCHAR(100) NULL,
    MODIFY `nombre` VARCHAR(100) NOT NULL,
    MODIFY `descripcion` TEXT NULL;

-- AlterTable
ALTER TABLE `promocion` MODIFY `titulo` VARCHAR(100) NOT NULL,
    MODIFY `descripcion` TEXT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `estado` ENUM('ACTIVO', 'INACTIVO', 'PENDIENTE', 'BLOQUEADO') NOT NULL DEFAULT 'ACTIVO',
    MODIFY `nombre` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NULL,
    MODIFY `apellido` VARCHAR(100) NULL,
    MODIFY `direccion` VARCHAR(255) NULL,
    MODIFY `telefono` VARCHAR(20) NULL;
