'use client'
import React, { useState, useEffect } from "react";
import { Card } from "@/components/Card";

const LOCALSTORAGEPARAM = 'cart';


/**
getStaticProps or getServerSideProps for catching
server-side rendering

getStaticPaths for dynamic routes
 
*/
const ShoppingListPage = ({ propIngredients }) => {
    const [ingredientBasket, setIngredientBasket] = useState({});

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem(LOCALSTORAGEPARAM)) || {};
        const basketPtr = { ...localCart };

        console.log(`propIngredients: ${propIngredients}`);

        if (propIngredients &&
            propIngredients.forEach(i => {
                if (!localCart[i.id]) {
                    basketPtr[i.id] = { ...i, cart: false };
                }
            })
        )
        setIngredientBasket(basketPtr);
        localStorage.setItem(LOCALSTORAGEPARAM, JSON.stringify(basketPtr));
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