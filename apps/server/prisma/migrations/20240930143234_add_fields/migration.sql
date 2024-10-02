/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('NOT_STARTED', 'PENDING', 'COMPLETED', 'IN_PROGRESS', 'UPDATED');

-- CreateEnum
CREATE TYPE "VOCABULARY_STATUS" AS ENUM ('LEARNING', 'REVIEW_PENDING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "NOTIFICATION_STATUS" AS ENUM ('PENDING', 'SENT', 'FAILED');

-- CreateEnum
CREATE TYPE "NOTIFICATION_TYPE" AS ENUM ('REVIEW', 'LESSON_REMINDER', 'PROGRESS_MILESTONE');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordHash",
DROP COLUMN "picture",
DROP COLUMN "refreshToken",
ADD COLUMN     "completedLessonCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "LessonStatus" (
    "id" SERIAL NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'NOT_STARTED',
    "progress" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LessonStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseStatus" (
    "id" SERIAL NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'NOT_STARTED',
    "progress" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "type" "NOTIFICATION_TYPE" NOT NULL DEFAULT 'REVIEW',
    "message" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3),
    "status" "NOTIFICATION_STATUS" NOT NULL DEFAULT 'PENDING',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VocabularyStatus" (
    "id" SERIAL NOT NULL,
    "status" "VOCABULARY_STATUS" NOT NULL DEFAULT 'LEARNING',
    "learnedAt" TIMESTAMP(3) NOT NULL,
    "nextReviewAt" TIMESTAMP(3) NOT NULL,
    "reviewStage" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "vocabularyId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VocabularyStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NotificationToVocabularyStatus" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "VocabularyStatus_userId_vocabularyId_idx" ON "VocabularyStatus"("userId", "vocabularyId");

-- CreateIndex
CREATE UNIQUE INDEX "_NotificationToVocabularyStatus_AB_unique" ON "_NotificationToVocabularyStatus"("A", "B");

-- CreateIndex
CREATE INDEX "_NotificationToVocabularyStatus_B_index" ON "_NotificationToVocabularyStatus"("B");

-- CreateIndex
CREATE INDEX "Lesson_courseId_createdAt_idx" ON "Lesson"("courseId", "createdAt");

-- AddForeignKey
ALTER TABLE "LessonStatus" ADD CONSTRAINT "LessonStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonStatus" ADD CONSTRAINT "LessonStatus_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStatus" ADD CONSTRAINT "CourseStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStatus" ADD CONSTRAINT "CourseStatus_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VocabularyStatus" ADD CONSTRAINT "VocabularyStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VocabularyStatus" ADD CONSTRAINT "VocabularyStatus_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" ADD CONSTRAINT "_NotificationToVocabularyStatus_A_fkey" FOREIGN KEY ("A") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" ADD CONSTRAINT "_NotificationToVocabularyStatus_B_fkey" FOREIGN KEY ("B") REFERENCES "VocabularyStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
