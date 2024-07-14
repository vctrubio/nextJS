'use client'

import { db } from '@/lib/db';
import { Category } from '@prisma/client';

const CategoryDropdown = () => {
    return (
        <select name="category">
            {Object.values(Category).map((value) => (
                <option value={value} key={value}>{value}</option>
            ))}
        </select>
    );
};

export const AddIngredient = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = formData.get('name');
        const category = formData.get('category');

        form.reset();
        form.querySelector('select[name="category"]').value = category;
        
        console.log('Submitting form with:', { name, category });
        return { prop: {name, category}}
    }

    return (
        <>
            <form onSubmit={handleSubmit} style={{ color: 'red' }}>
                <input type="text" placeholder="name" name='name' />
                <CategoryDropdown />
                <button type="submit">Add Ingredient</button>
            </form>
        </>
    )
}

/*
       try {
            await db.ingredient.create({
                data: {
                    name: name,
                    category: category,
                },
            });
        } catch (error) {
            console.error(error);
        }
*/