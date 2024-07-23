import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';
import { ViewAllIngredients } from '@/components/ViewAllIngredients';

export default async function AdminPage() {
    const ingrediens = await db.ingredient.findMany();

    return (
        <div>
            <h1>Admin Page</h1>
            <ViewAllIngredients ingredients={ingrediens} />
        </div>
    );
}