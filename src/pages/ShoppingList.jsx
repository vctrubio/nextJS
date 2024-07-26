'use client'
import React, { useState, useEffect } from "react";
import { Card } from "@/components/Card";

const LOCALSTORAGEPARAM = 'cart';

const ShoppingListPage = ({ propIngredients }) => {
    const [ingredientBasket, setIngredientBasket] = useState({});

    useEffect(() => {
        // localStorage.clear();
        const localCart = JSON.parse(localStorage.getItem(LOCALSTORAGEPARAM)) || {};
        const basketPtr = { ...localCart };

        const propIngredientsObj = propIngredients.reduce((acc, current) => {
            acc[current.id] = current;
            return acc;
          }, {}); //this is to convert the array to an object with the id as the key

          
        Object.values(propIngredients).forEach(value => {
            if (!basketPtr[value.id]) {
                basketPtr[value.id] = { ...value, cart: false };
            }
        })

        const checkLocalStorage = () => {
            let isModified = false;
            for (let id in basketPtr) {
                if (!propIngredientsObj[id]) {
                    delete basketPtr[id];
                    isModified = true;
                }
            }
            if (isModified) {
                localStorage.setItem(LOCALSTORAGEPARAM, JSON.stringify(basketPtr));
            }
        };

        setIngredientBasket(basketPtr);
        localStorage.setItem(LOCALSTORAGEPARAM, JSON.stringify(basketPtr));
        checkLocalStorage();
    }, [propIngredients]);

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