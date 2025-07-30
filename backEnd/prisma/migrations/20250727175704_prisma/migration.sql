/*
  Warnings:

  - Made the column `categoria` on table `producto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `producto` MODIFY `categoria` ENUM('CUADERNOS', 'LAPICES', 'FIBRONES', 'MOCHILAS', 'HOJAS', 'IMPRESIONES', 'PLASTILINAS', 'REGLAS', 'OTROS') NOT NULL DEFAULT 'OTROS';
