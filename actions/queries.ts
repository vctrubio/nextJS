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
        return result.id;
    } catch (error) {
        return false;
    }
}

export const deleteIngredientDb = async (ingredientId: number) => {
    try {
        const result = await db.ingredient.delete({
            where: {
                id: ingredientId,
            },
        });
        if (result)
            return true;
    } catch (error) {
        console.error("Error deleting ingredient from db:", error);
        return false;
    }
}

export const getIngredientsDb = async () => {
    try{
        const ingredients = await db.ingredient.findMany();
        return ingredients;
    }
    catch(error){
        console.error("Error getting ingredients from db:", error);
        return false;
    }
}
