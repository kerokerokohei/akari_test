/*
  Warnings:

  - You are about to drop the column `delete` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `delete`,
    ADD COLUMN `Isdeleted` BOOLEAN NOT NULL DEFAULT false;
