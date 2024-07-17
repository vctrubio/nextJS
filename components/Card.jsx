
import React from "react";
import { Ingredient } from "@prisma/client"
import { DeleteBtn } from "@/components/Buttons";

import SvgCart from "@/public/cart.svg"


export const Card = ({ ingredient }) => {

    return (
        <React.Fragment>
            <div className="card-one" style={{ borderColor: 'red' }} >
                <div className="card-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%' }}>
                    {ingredient.name}
                </div>
            </div>
            {/* {JSON.stringify(ingredient, null, 2)} */}
            {/* <DeleteBtn ingredientId={ingredient.id} /> */}
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
        </React.Fragment>
    )
}

/* todos card
svg for icons
card flex and style
color for category



*/