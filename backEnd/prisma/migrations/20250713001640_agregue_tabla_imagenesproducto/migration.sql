-- AlterTable
ALTER TABLE `historialestadopedido` ADD COLUMN `cambiadoPor` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `ImagenProducto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(255) NOT NULL,
    `productoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImagenProducto` ADD CONSTRAINT `ImagenProducto_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
