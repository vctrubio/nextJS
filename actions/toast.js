"use client"
import { Toaster, toast } from 'react-hot-toast';
import { addIngredientDb } from '@/actions/queries';
import { CategoryDropdown } from '@/components/Form';

export const callToast = () => {
    toast.success('Ingredient added successfully!');
}

export const AddIngrediente = () => {
    const addP = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name');
        const category = formData.get('category');
        const ingredient = { name, category };
        if (await addIngredientDb(ingredient)) {
            console.log('Ingredient added successfully.............!');
        }
        console.log('formData........................', formData.name);
        callToast();
        form.reset();
    }

    return (
        <>
            <form
                style={{ color: 'red', gap: 5 }}
                onSubmit={addP}
            >
                <input type="text" placeholder="name" required name='name' />
                <CategoryDropdown />
                <button>Add Ingredient</button>
            </form>
            <Toaster />
        </>
    )
}
