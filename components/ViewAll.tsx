'use server'
import React from 'react';
import { db } from '@/lib/db';
import { Ingredient } from '@prisma/client';
import { DeleteBtn } from '@/components/Buttons';
import { Card } from './Card';

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
                    <Card ingredient={ingredient} />
                ))
            }
        </>
    );
};
