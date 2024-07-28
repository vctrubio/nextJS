"use client"
import React, { useEffect, useState } from "react"; // Import useState
import { AdminCardItem } from './Card';
import { AddIngredient } from './Form';

export const ViewAllIngredients = ({ ingredients }) => {
    const [ingredientList, setIngredientList] = useState(ingredients);
    const [openCardId, setOpenCardId] = useState(null); // Track open card by ID

    const toggleCard = (id) => {
        setOpenCardId(id === openCardId ? null : id);
    }

    return (
        <>
            <AddIngredient path={"/admin"} setItem={setIngredientList} />
            {
                ingredientList &&
                ingredientList.map((ingredient) => (
                    <AdminCardItem key={ingredient.id} item={ingredient} setItem={setIngredientList} 
                    isOpen={openCardId === ingredient.id}
                    toggleCard={() => toggleCard(ingredient.id)}
                    />
                ))
            }
        </>
    );
};