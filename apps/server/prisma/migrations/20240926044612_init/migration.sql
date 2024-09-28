/*
  Warnings:

  - Added the required column `kanji` to the `FlashCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kanji` to the `Vocabulary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlashCard" ADD COLUMN     "kanji" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vocabulary" ADD COLUMN     "kanji" TEXT NOT NULL;
