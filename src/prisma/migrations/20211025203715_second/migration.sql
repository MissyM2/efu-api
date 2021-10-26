/*
  Warnings:

  - You are about to drop the column `code` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `deptId` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `course` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(50)`.
  - You are about to drop the column `deptId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `enrolled` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `student` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `student` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(75)`.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `longDesc` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_deptId_fkey";

-- DropForeignKey
ALTER TABLE "course" DROP CONSTRAINT "course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_deptId_fkey";

-- DropIndex
DROP INDEX "course_code_key";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "code",
DROP COLUMN "deptId",
DROP COLUMN "description",
DROP COLUMN "teacherId",
ADD COLUMN    "code" VARCHAR(10) NOT NULL,
ADD COLUMN     "longDesc" VARCHAR(100),
ADD COLUMN     "studentId" INTEGER,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);

-- AlterTable
ALTER TABLE "student" DROP COLUMN "deptId",
DROP COLUMN "enrolled",
DROP COLUMN "fullName",
ADD COLUMN     "firstName" VARCHAR(50),
ADD COLUMN     "lastName" VARCHAR(50),
ADD COLUMN     "password" VARCHAR(20) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(75);

-- DropTable
DROP TABLE "department";

-- DropTable
DROP TABLE "teacher";

-- DropEnum
DROP TYPE "TeacherType";

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
