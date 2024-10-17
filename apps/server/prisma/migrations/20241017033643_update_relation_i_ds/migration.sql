/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CourseStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FlashCard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Grammar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Lesson` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `LessonStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MiniTest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Vocabulary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `VocabularyStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "CourseStatus" DROP CONSTRAINT "CourseStatus_courseId_fkey";

-- DropForeignKey
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Grammar" DROP CONSTRAINT "Grammar_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_courseId_fkey";

-- DropForeignKey
ALTER TABLE "LessonStatus" DROP CONSTRAINT "LessonStatus_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "MiniTest" DROP CONSTRAINT "MiniTest_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "Vocabulary" DROP CONSTRAINT "Vocabulary_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "VocabularyStatus" DROP CONSTRAINT "VocabularyStatus_vocabularyId_fkey";

-- DropForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" DROP CONSTRAINT "_NotificationToVocabularyStatus_A_fkey";

-- DropForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" DROP CONSTRAINT "_NotificationToVocabularyStatus_B_fkey";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Course_id_seq";

-- AlterTable
ALTER TABLE "CourseStatus" DROP CONSTRAINT "CourseStatus_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CourseStatus_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CourseStatus_id_seq";

-- AlterTable
ALTER TABLE "FlashCard" DROP CONSTRAINT "FlashCard_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "FlashCard_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FlashCard_id_seq";

-- AlterTable
ALTER TABLE "Grammar" DROP CONSTRAINT "Grammar_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Grammar_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Grammar_id_seq";

-- AlterTable
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "courseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Lesson_id_seq";

-- AlterTable
ALTER TABLE "LessonStatus" DROP CONSTRAINT "LessonStatus_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "LessonStatus_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "LessonStatus_id_seq";

-- AlterTable
ALTER TABLE "MiniTest" DROP CONSTRAINT "MiniTest_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MiniTest_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MiniTest_id_seq";

-- AlterTable
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Notification_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Notification_id_seq";

-- AlterTable
ALTER TABLE "Vocabulary" DROP CONSTRAINT "Vocabulary_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Vocabulary_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Vocabulary_id_seq";

-- AlterTable
ALTER TABLE "VocabularyStatus" DROP CONSTRAINT "VocabularyStatus_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "vocabularyId" SET DATA TYPE TEXT,
ADD CONSTRAINT "VocabularyStatus_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "VocabularyStatus_id_seq";

-- AlterTable
ALTER TABLE "_NotificationToVocabularyStatus" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlashCard" ADD CONSTRAINT "FlashCard_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vocabulary" ADD CONSTRAINT "Vocabulary_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Grammar" ADD CONSTRAINT "Grammar_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniTest" ADD CONSTRAINT "MiniTest_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonStatus" ADD CONSTRAINT "LessonStatus_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseStatus" ADD CONSTRAINT "CourseStatus_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VocabularyStatus" ADD CONSTRAINT "VocabularyStatus_vocabularyId_fkey" FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" ADD CONSTRAINT "_NotificationToVocabularyStatus_A_fkey" FOREIGN KEY ("A") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToVocabularyStatus" ADD CONSTRAINT "_NotificationToVocabularyStatus_B_fkey" FOREIGN KEY ("B") REFERENCES "VocabularyStatus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
