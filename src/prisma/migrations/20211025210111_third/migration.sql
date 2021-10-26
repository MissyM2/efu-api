/*
  Warnings:

  - Made the column `longDesc` on table `course` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "course" ALTER COLUMN "code" DROP NOT NULL,
ALTER COLUMN "longDesc" SET NOT NULL;
