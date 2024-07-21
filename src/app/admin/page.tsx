import { db } from '@/lib/db';
import { CategoryDropdown } from "@/components/Form";
import { AdminCardItem } from '@/components/Card';
import { addIngredientDb } from '@/actions/queries';
import { Category, Ingredient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { callToast } from '@/actions/toast.js';
import { AddIngredient } from '@/components/Form';


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

export default async function AdminPage() {
    const PATH = '/admin';

    return (
        <div>
            <h1>Admin Page</h1>
            <AddIngredient path={PATH} />
            <ViewAllIngredients />
        </div>
    );
}