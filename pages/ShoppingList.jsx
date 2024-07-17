'use client'
import React, { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { getIngredientsDb } from "@/actions/queries";
import { Ingredient } from "@prisma/client";

import { Card } from "@/components/Card";

const CardClickView = ({ ingredient, toggleCart }) => {
    return (
        <div onClick={() => toggleCart(ingredient.id)}>
            <Card ingredient={ingredient} />
        </div>
    );
};

const ShoppingListPage = () => {
    const [ingredientBasket, setIngredientBasket] = useState([]);

    useEffect(() => {
        getIngredientsDb().then((ingredients) => {
            setIngredientBasket(ingredients.map(ingredient => ({ ...ingredient, cart: false })));
        });
    }, []);

    const toggleCart = (id) => {
        setIngredientBasket(prevBasket =>
            prevBasket.map(ingredient =>
                ingredient.id === id ? { ...ingredient, cart: !ingredient.cart } : ingredient
            )
        );
    };

    /*
    Cart is where ingredients are stored after being added to the cart (ingredient.cart == true)
    Dispensary is where (ingredient.cart == false)
    toggle between them while click, it should update the dom
    */
    return (<div className="shopping-list-container">
        <div>
            <h1>
                Cart
            </h1>
            {ingredientBasket
                .filter(ingredient => ingredient.cart)
                .map((ingredient) => (
                    <div key={ingredient.id}>
                        <CardClickView ingredient={ingredient} toggleCart={toggleCart} />
                    </div>))}
        </div>
        <div>
            <h1 >
                Dispensary
            </h1>
            {ingredientBasket
                .filter(ingredient => !ingredient.cart)
                .map((ingredient) => (
                    <div key={ingredient.id}>
                        <CardClickView ingredient={ingredient} toggleCart={toggleCart} />
                    </div>
                ))}
        </div>
    </div >);
}

export default ShoppingListPage;