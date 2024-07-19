import React from 'react';
import { db } from '@/lib/db';
import { AddIngredient, CategoryDropdown } from "@/components/Form";
import { AdminCardItem } from '@/components/Card';
import { addIngredientDb } from '@/actions/queries';
import { Category, Ingredient } from '@prisma/client';
import { revalidatePath } from 'next/cache';


const ViewAllIngredients = async () => {
    const ingredientList = await db.ingredient.findMany();
    return (
        <>
            {
                ingredientList &&
                ingredientList.map((ingredient) => (
                    <AdminCardItem key={ingredient.id} {...ingredient} />
                ))
            }
        </>
    );
};

const AddIngrediente = () => {
    const addPost = async (formData: FormData) => {
        "use server"
        const name = formData.get('name');
        const category = formData.get('category');
        const ingredient = {name, category} as Ingredient;
        addIngredientDb(ingredient)
        revalidatePath('/admin')
    }

    return (
        <form
            style={{ color: 'red', gap: 5 }}
            action={addPost}
        >

            <input type="text" placeholder="name" required name='name' />
            <CategoryDropdown />
            <button>Add Ingredient</button>
        </form>
    )
}

export default async function AdminPage() {
    return (
        <div>
            <h1>Admin Page</h1>
            <AddIngrediente />
            <ViewAllIngredients />
        </div>
    );
}