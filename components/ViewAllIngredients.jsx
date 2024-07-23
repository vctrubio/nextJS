"use client"
import { db } from '@/lib/db';
import React, { useEffect, useState } from "react"; // Import useState
import { AdminCardItem } from './Card';

export const ViewAllIngredients = ({ingredients}) => {
    const [ingredientList, setIngredientList] = useState(ingredients);
    
    return (
        <>
            {
                ingredientList &&
                ingredientList.map((ingredient) => (
                    <AdminCardItem key={ingredient.id}  item={ingredient} setItem={setIngredientList}/>
                ))
            }
        </>
    );
};