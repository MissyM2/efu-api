/*
  Warnings:

  - You are about to drop the column `studentId` on the `deliverable` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliverable" DROP CONSTRAINT "deliverable_studentId_fkey";

-- AlterTable
ALTER TABLE "deliverable" DROP COLUMN "studentId";
