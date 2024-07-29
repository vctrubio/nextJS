'use client'
import React, { useState } from 'react'
import { Category } from '@prisma/client';
import { addIngredientDb } from '@/actions/queries';
import { callToast } from '@/actions/toast';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useRef, useEffect } from 'react';

export const CategoryDropdown = () => {
    const [selectedCategory, setSelectedCategory] = useState(localStorage.getItem('selectedCategory') || '');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
        localStorage.setItem('selectedCategory', event.target.value);
    };

    return (
        <select name="category" value={selectedCategory} onChange={handleChange}>
            {Object.values(Category).map((value) => (
                <option value={value} key={value}>{value}</option>
            ))}
        </select>
    );
};

export const AddIngredient = ({ path, setItem }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);

    const addP = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const category = formData.get('category');
        const ingredient = { name, category };

        let id = null;
        if (id = await addIngredientDb(ingredient)) {
            callToast(ingredient.name, "added successfully!")
            form.reset();
            ingredient.id = id;
            setItem((prev) => [...prev, ingredient]);
        }
    }

    return (
        <div className='form-add-ingredient'>
            <form onSubmit={addP} >
                <input type="text" placeholder="name" required name='name' ref={ref} />
                <CategoryDropdown />
                <button><IoIosAddCircleOutline /></button>
            </form>
        </div>
    )
}