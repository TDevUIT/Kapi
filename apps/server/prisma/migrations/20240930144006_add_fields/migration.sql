/*
  Warnings:

  - You are about to drop the column `piture` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "piture",
ADD COLUMN     "picture" TEXT;
