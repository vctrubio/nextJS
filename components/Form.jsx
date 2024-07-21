'use client'

import { Category } from '@prisma/client';
import { addIngredientDb } from '@/actions/queries';
import { callToast } from '@/actions/toast';
import useSWR, { mutate } from 'swr';
import { useRef, useEffect } from 'react';
import { SnackbarProvider, enqueueSnackbar, useSnackbar } from 'notistack'

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
    const { enqueueSnackbar } = useSnackbar();  // Get enqueueSnackbar from useSnackbar

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

        if (await addIngredientDb(ingredient)) {
            // enqueueSnackbar(`Ingredient "${name}" added!`, { variant: 'success' });
            callToast()
            console.log('added');
            form.reset();
            mutate(path);

        }
    }

    return (
        <div className='form-add-ingredient'>
            {/* <SnackbarProvider maxSnack={3}> */}

                <form
                    onSubmit={addP}
                >
                    <input type="text" placeholder="name" required name='name' ref={ref} />
                    <CategoryDropdown />
                    <button id="color-green">Add Ingredient</button>
                </form>

            {/* </SnackbarProvider> */}

        </div>
    )
}