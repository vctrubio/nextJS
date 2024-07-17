
import React from "react";
import { Ingredient } from "@prisma/client"
import { DeleteBtn } from "@/components/Buttons";
import { Category } from "@prisma/client";

import SvgCart from "@/public/cart.svg"

const rtnCatagoryColor = (category) => {

    if (category.category === 'Fruit') {
        return 'grey'
    }
    else
        return 'purple'
}

export const Card = ({ ingredient }) => {

    return (
        <React.Fragment>
            <div className="card-one" style={{ border: `1px solid ${rtnCatagoryColor(ingredient)}` }} >
                <div className="card-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%' }}>
                    {ingredient.name}
                    {/* , {ingredient.category} */}
                </div>
            </div>

        </React.Fragment>
    )
}

export const CardSample = () => {

    return (
        <React.Fragment>
            <div className="card-one" style={{ borderColor: 'red' }} >
                <div className="card-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%' }}>
                    Apples
                </div>
            </div>
            {/* {JSON.stringify(ingredient, null, 2)} */}
            {/* <DeleteBtn ingredientId={ingredient.id} /> */}
        </React.Fragment>
    )
}

/* todos card
svg for icons
card flex and style
color for category



*/