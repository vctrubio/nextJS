'use client'

import { Category } from '@prisma/client';
import { addIngredientDb } from '@/actions/queries';
import { callToast } from '@/actions/toast';
import useSWR, { mutate } from 'swr';
import { useRef, useEffect } from 'react';

export const CategoryDropdown = () => {
    return (
        <select name="category">
            {Object.values(Category).map((value) => (
                <option value={value} key={value}>{value}</option>
            ))}
        </select>
    );
};


export const AddIngredient = (path) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []); // Empty dependency array means this effect runs once after initial render

    const addP = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const category = formData.get('category');
        const ingredient = { name, category };

        if (await addIngredientDb(ingredient)) {
            callToast(name);
            form.reset();
            mutate(path);

        }
    }

    return (
        <>
            <form
                style={{ color: 'red', gap: 5 }}
                onSubmit={addP}
            >
                <input type="text" placeholder="name" required name='name' ref={ref}/>
                <CategoryDropdown />
                <button>Add Ingredient</button>
            </form>
        </>
    )
}