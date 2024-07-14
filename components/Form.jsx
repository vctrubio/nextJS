'use client'

import { db } from '@/lib/db';
import { Category } from '@prisma/client';
import { addIngredientDb } from '@/actions/queries';

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

        const prop = { name, category };
        addIngredientDb(prop);
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