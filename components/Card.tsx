
import React from "react";
import { Ingredient } from "@prisma/client"
import { DeleteBtn } from "@/components/Buttons";

import Image from 'next/image';
import SvgCart from "@/public/cart.svg"

interface CardProps {
    ingredient: Ingredient;
}

export const Card: React.FC<CardProps> = ({ ingredient }) => {

    return (
        <React.Fragment key={ingredient.id}>
            <div className="border boder-white flex ">
                <div>
                    {ingredient.category}
                </div>
                <div>
                    {ingredient.name}
                </div>
                <DeleteBtn ingredientId={ingredient.id} />
            </div>
        </React.Fragment>
    )
}

export const CardSample: React.FC = () => {
    return (
        <React.Fragment>
            <div className="flex border">
                <div className="me-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div>
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