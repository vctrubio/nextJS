'use client'

import { Category } from "@prisma/client";


export const CategoryColorMap = () => {
    const categories = Category;
    console.log(`categories: ${JSON.stringify(categories, null, 2)}`);

    return (
        <div className="flex flex-row gap-2">
            {Object.keys(categories).map((category) => (
                <div key={category}>
                    {category}
                </div>
            ))}
        </div>
    )
}

export const CategoryAdmin = () => {
    //set Category to color on click
    return (
        <div className='my-10 border border-white'>
            Category Admin Page
            <CategoryColorMap />
        </div>
    );
}
