
import React from "react";
import { Ingredient } from "@prisma/client"
import { DeleteBtn } from "@/components/Buttons";

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

/* todos card
svg for icons
card flex and style
color for category



*/