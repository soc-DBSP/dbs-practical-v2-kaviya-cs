/*
  Warnings:

  - You are about to drop the column `date` on the `student` table. All the data in the column will be lost.
  - Added the required column `dob` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stud_mod_performance" ALTER COLUMN "mark" DROP NOT NULL,
ALTER COLUMN "grade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "student" DROP COLUMN "date",
ADD COLUMN     "dob" DATE NOT NULL,
ALTER COLUMN "mobile_phone" DROP NOT NULL,
ALTER COLUMN "mobile_phone" SET DATA TYPE CHAR(8),
ALTER COLUMN "home_phone" DROP NOT NULL,
ALTER COLUMN "home_phone" SET DATA TYPE CHAR(8);

-- RenameForeignKey
ALTER TABLE "course" RENAME CONSTRAINT "fk_course_offered_by" TO "course_offered_by_fk";

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "stud_mod_performance_adm_no_fk" TO "stud_mod_performance_adm_no_fkey";

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "stud_mod_performance_mod_registered_fk" TO "stud_mod_performance_mod_registered_fkey";
