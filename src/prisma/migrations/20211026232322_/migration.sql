/*
  Warnings:

  - You are about to drop the column `code` on the `deliverable` table. All the data in the column will be lost.
  - The `title` column on the `deliverable` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `longDesc` on the `deliverable` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.
  - Added the required column `prepTime` to the `deliverable` table without a default value. This is not possible if the table is not empty.
  - Made the column `longDesc` on table `deliverable` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TitleType" AS ENUM ('QUIZ', 'TEST', 'HOMEWORK');

-- CreateEnum
CREATE TYPE "ImpactType" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterTable
ALTER TABLE "deliverable" DROP COLUMN "code",
ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "impact" "ImpactType" NOT NULL DEFAULT E'LOW',
ADD COLUMN     "prepTime" INTEGER NOT NULL,
DROP COLUMN "title",
ADD COLUMN     "title" "TitleType" NOT NULL DEFAULT E'HOMEWORK',
ALTER COLUMN "longDesc" SET NOT NULL,
ALTER COLUMN "longDesc" SET DATA TYPE VARCHAR(50);
