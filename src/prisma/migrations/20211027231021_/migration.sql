-- CreateEnum
CREATE TYPE "TitleType" AS ENUM ('QUIZ', 'TEST', 'HOMEWORK');

-- CreateEnum
CREATE TYPE "ImpactType" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "deliverable" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER,
    "dueDate" TIMESTAMP(3),
    "title" "TitleType" NOT NULL DEFAULT E'HOMEWORK',
    "longDesc" VARCHAR(50) NOT NULL,
    "prepTime" INTEGER NOT NULL,
    "impact" "ImpactType" NOT NULL DEFAULT E'LOW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliverable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
