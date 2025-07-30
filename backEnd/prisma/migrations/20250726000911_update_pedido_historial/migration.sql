/*
  Warnings:

  - You are about to drop the column `estado` on the `historialestadopedido` table. All the data in the column will be lost.
  - Added the required column `estadoAnterior` to the `HistorialEstadoPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estadoNuevo` to the `HistorialEstadoPedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `historialestadopedido` DROP COLUMN `estado`,
    ADD COLUMN `cambiadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `estadoAnterior` ENUM('PENDIENTE', 'EN_PROCESO', 'LISTO_PARA_RETIRO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO') NOT NULL,
    ADD COLUMN `estadoNuevo` ENUM('PENDIENTE', 'EN_PROCESO', 'LISTO_PARA_RETIRO', 'EN_CAMINO', 'ENTREGADO', 'CANCELADO') NOT NULL;
