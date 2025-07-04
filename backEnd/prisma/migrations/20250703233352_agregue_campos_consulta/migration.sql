/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `consulta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telefono]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefono` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `consulta` DROP FOREIGN KEY `Consulta_usuarioId_fkey`;

-- DropIndex
DROP INDEX `Consulta_usuarioId_fkey` ON `consulta`;

-- AlterTable
ALTER TABLE `consulta` DROP COLUMN `usuarioId`,
    ADD COLUMN `email` VARCHAR(100) NOT NULL,
    ADD COLUMN `nombre` VARCHAR(100) NOT NULL,
    ADD COLUMN `telefono` VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_telefono_key` ON `Usuario`(`telefono`);
