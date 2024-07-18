'use client'
import React, { useState, useEffect } from "react";
import { getIngredientsDb } from "@/actions/queries";
import { Card } from "@/components/Card";

const LOCALSTORAGEPARAM = 'cart';

const ShoppingListPage = () => {
    const [ingredientBasket, setIngredientBasket] = useState({});

    const loadLocalStorage = (ingredients) => {
        let storedCart = JSON.parse(localStorage.getItem(LOCALSTORAGEPARAM)) || {};
        let updatedBasket = { ...storedCart };

        ingredients.forEach(ingredient => {
            if (!storedCart[ingredient.id]) {
                updatedBasket[ingredient.id] = { ...ingredient, cart: false };
            }
        });

        setIngredientBasket(updatedBasket);
        localStorage.setItem(LOCALSTORAGEPARAM, JSON.stringify(updatedBasket));
    };

    useEffect(() => {
        // localStorage.clear()
        console.log('useEffect init')
        getIngredientsDb().then((ingredients) => {
            loadLocalStorage(ingredients);
        });
        console.log('useEffect finito')
    }, []);

    const toggleCart = (id) => {
        setIngredientBasket(prevBasket => {
            const updatedBasket = {
                ...prevBasket,
                [id]: { ...prevBasket[id], cart: !prevBasket[id].cart }
            };
            localStorage.setItem(LOCALSTORAGEPARAM, JSON.stringify(updatedBasket));
            return updatedBasket;
        });
    };

    const CardClickView = ({ ingredient }) => {
        return (
            <div onClick={() => toggleCart(ingredient.id)}>
                <Card ingredient={ingredient} />
            </div>
        );
    };

    return (
        <div className="shopping-list-container">
            <div>
                <h1>Cart</h1>
                {Object.values(ingredientBasket)
                    .filter(ingredient => ingredient.cart)
                    .map((ingredient) => (
                        <div key={ingredient.id}>
                            <CardClickView ingredient={ingredient} />
                        </div>
                    ))}
            </div>
            <div>
                <h1>Dispensary</h1>
                {Object.values(ingredientBasket)
                    .filter(ingredient => !ingredient.cart)
                    .map((ingredient) => (
                        <div key={ingredient.id}>
                            <CardClickView ingredient={ingredient} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ShoppingListPage;
