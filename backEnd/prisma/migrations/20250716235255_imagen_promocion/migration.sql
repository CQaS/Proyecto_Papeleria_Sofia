/*
  Warnings:

  - You are about to drop the column `imagenUrl` on the `promocion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `promocion` DROP COLUMN `imagenUrl`;

-- CreateTable
CREATE TABLE `ImagenPromocion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `promocionId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImagenPromocion` ADD CONSTRAINT `ImagenPromocion_promocionId_fkey` FOREIGN KEY (`promocionId`) REFERENCES `Promocion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
