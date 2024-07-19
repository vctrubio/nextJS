import React from 'react';
import { db } from '@/lib/db';
import { AddIngredient } from "@/components/Form";
import { AdminCardItem } from '@/components/Card';


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


export default function AdminPage() {
    return (
        <div>
            <h1>Admin Page</h1>
            <AddIngredient />
            <ViewAllIngredients />
        </div>
    );
}