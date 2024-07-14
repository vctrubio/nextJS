'use server'
import { db } from "@/lib/db";

export const addIngredientDb =  async (ingredient) => {
    console.log('Adding ingredient to db...........:', ingredient);
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