/*
  Warnings:

  - The values [LISTO_PARA_RETIRO,EN_CAMINO] on the enum `EstadoPedido` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `archivoUrl` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `detalles` on the `Pedido` table. All the data in the column will be lost.
  - Added the required column `acabado` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calidad` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cantidad` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iva` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamano` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPapel` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TamanoPapel" AS ENUM ('A4', 'A5', 'A3', 'Carta', 'Oficio');

-- CreateEnum
CREATE TYPE "TipoPapel" AS ENUM ('Bond', 'Opalina', 'Couche', 'Reciclado');

-- CreateEnum
CREATE TYPE "AcabadoPapel" AS ENUM ('Mate', 'Brillante', 'Satinado', 'Texturizado');

-- CreateEnum
CREATE TYPE "CalidadPapel" AS ENUM ('Económica', 'Estándar', 'Alta_Calidad', 'Premium');

-- CreateEnum
CREATE TYPE "Orientacion" AS ENUM ('VERTICAL', 'HORIZONTAL');

-- AlterEnum
BEGIN;
CREATE TYPE "EstadoPedido_new" AS ENUM ('PENDIENTE', 'EN_PROCESO', 'LISTO', 'ENTREGADO', 'CANCELADO');
ALTER TABLE "Pedido" ALTER COLUMN "estado" DROP DEFAULT;
ALTER TABLE "Pedido" ALTER COLUMN "estado" TYPE "EstadoPedido_new" USING ("estado"::text::"EstadoPedido_new");
ALTER TABLE "HistorialEstadoPedido" ALTER COLUMN "estadoAnterior" TYPE "EstadoPedido_new" USING ("estadoAnterior"::text::"EstadoPedido_new");
ALTER TABLE "HistorialEstadoPedido" ALTER COLUMN "estadoNuevo" TYPE "EstadoPedido_new" USING ("estadoNuevo"::text::"EstadoPedido_new");
ALTER TYPE "EstadoPedido" RENAME TO "EstadoPedido_old";
ALTER TYPE "EstadoPedido_new" RENAME TO "EstadoPedido";
DROP TYPE "EstadoPedido_old";
ALTER TABLE "Pedido" ALTER COLUMN "estado" SET DEFAULT 'PENDIENTE';
COMMIT;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "archivoUrl",
DROP COLUMN "detalles",
ADD COLUMN     "acabado" "AcabadoPapel" NOT NULL,
ADD COLUMN     "archivo" VARCHAR(255),
ADD COLUMN     "calidad" "CalidadPapel" NOT NULL,
ADD COLUMN     "cantidad" INTEGER NOT NULL,
ADD COLUMN     "comentarios" TEXT,
ADD COLUMN     "delivery" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dobleFaz" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "encuadernado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "fechaEntrega" TIMESTAMP(3),
ADD COLUMN     "grapado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "horaEntrega" VARCHAR(20),
ADD COLUMN     "iva" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "orientacion" "Orientacion" NOT NULL DEFAULT 'VERTICAL',
ADD COLUMN     "perforado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subtotal" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "tamano" "TamanoPapel" NOT NULL,
ADD COLUMN     "tipoPapel" "TipoPapel" NOT NULL;
