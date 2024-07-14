'use client'
import { deleteIngredientDb } from '@/actions/queries';

type DeleteBtnProps = {
    ingredientId: number;
};

export const DeleteBtn: React.FC<DeleteBtnProps> = ({ ingredientId }) => {
    const handleDelete = () => {
        deleteIngredientDb(ingredientId);
    };

    return (
        <button onClick={handleDelete}>Delete |{ingredientId.toString()}|</button>
    );
};