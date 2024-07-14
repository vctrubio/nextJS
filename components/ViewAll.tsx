'use server'
import React from 'react';
import { db } from '@/lib/db';
import { Ingredient } from '@prisma/client';
import { DeleteBtn } from '@/components/Buttons';

const fetchIngredients = async () => {
    return await db.ingredient.findMany();
}


export const ViewAllIngredients = async () => {
    const ingredientList = await db.ingredient.findMany(); //fetchIngredients();

    return (
        <>
            {
                ingredientList &&
                ingredientList.map((ingredient) => (
                    <React.Fragment key={ingredient.id}>
                        <div>
                            {ingredient.id} | {ingredient.name} | {ingredient.category}
                        </div>
                        <DeleteBtn ingredientId={ingredient.id} />
                    </React.Fragment>
                ))
            }
        </>
    );
};
