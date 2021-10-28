/*
  Warnings:

  - Added the required column `studentId` to the `deliverable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliverable" ADD COLUMN     "studentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
