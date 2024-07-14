'use server'
import { db } from "@/lib/db";
import { Ingredient } from "@prisma/client";

export const addIngredientDb =  async (ingredient: Ingredient) => {
    try {
        const result = await db.ingredient.create({
            data: {
                name: ingredient.name,
                category: ingredient.category,
            },
        });
        console.log("🚀 ~ addIngredientDb ~ result:", result)
    } catch (error) {
        console.error("Error adding ingredient to db:", error);
    }
}

export const deleteIngredientDb = async (ingredientId: number) => {
    try {
        const result = await db.ingredient.delete({
            where: {
                id: ingredientId,
            },
        });
        console.log("🚀 ~ deleteIngredientDb ~ result:", result)
    } catch (error) {
        console.error("Error deleting ingredient from db:", error);
    }
}