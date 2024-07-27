"use client"
import { db } from '@/lib/db';
import React, { useEffect, useState } from "react"; // Import useState
import { AdminCardItem } from './Card';
import { AddIngredient } from './Form';
import { mutate } from 'swr';

export const ViewAllIngredients = ({ingredients}) => {
    const [ingredientList, setIngredientList] = useState(ingredients);
    
    useEffect(() => {
        console.log('hio thhere change in ingredients-- call mutate')
        mutate("")
    }, [ingredientList]);

    return (
        <>
                <AddIngredient path={"/admin"} setItem={setIngredientList} />
            {
                ingredientList &&
                ingredientList.map((ingredient) => (
                    <AdminCardItem key={ingredient.id}  item={ingredient} setItem={setIngredientList}/>
                ))
            }
        </>
    );
};