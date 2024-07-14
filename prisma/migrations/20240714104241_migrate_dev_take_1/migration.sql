-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Fruit', 'Species', 'Granel');

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);
