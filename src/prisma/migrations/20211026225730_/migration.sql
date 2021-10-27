-- CreateTable
CREATE TABLE "deliverable" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER,
    "code" VARCHAR(10),
    "title" VARCHAR(50),
    "longDesc" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliverable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "deliverable" ADD CONSTRAINT "deliverable_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
