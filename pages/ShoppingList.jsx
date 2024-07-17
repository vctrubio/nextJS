'use client'
import React, { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { getIngredientsDb } from "@/actions/queries";
import { Ingredient } from "@prisma/client";

import { Card, CardSample } from "@/components/Card";


class IngredientBasket extends React.Component {
    constructor(ingredient) {
        super(ingredient);
        this.cart = false;
    }

    toggleCart = () => {
        this.cart = !this.cart
        console.log(`toggled cart for ${this.props.name} to ${this.cart}`)
    }

    render() {
        return (
            <div onClick={this.toggleCart} key={this.props.id}>
                <Card ingredient={this}/>
                {this.cart ? 'true' : 'false'}
            </div>
        )
    }
}

const ShoppingListPage = () => {
    const [ingredientBasket, setIngredientBasket] = useState([]);

    window.ig = ingredientBasket

    const parseIngredientsToBasket = (ingredients) => {
        return ingredients.map((ingredient) => new IngredientBasket(ingredient));
    }

    useEffect(() => {
        getIngredientsDb().then((ingredients) => {
            setIngredientBasket(parseIngredientsToBasket(ingredients))
        });
    }, []);

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
        </div>
        <div>
            <h1>
                Dispensary
            </h1>
            {ingredientBasket
                .filter(ingredient => !ingredient.cart)
                .map((ingredient) => (
                    <div key={ingredient.id}>
                        {ingredient.render()}
                    </div>
                ))}
        </div>
    </div >);
}

export default ShoppingListPage;