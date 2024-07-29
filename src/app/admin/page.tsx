import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';
import { ViewAllIngredients } from '@/components/ViewAllIngredients';
import {CategoryAdmin} from '@/components/CategoryAdmin';

export default async function AdminPage() {
    const ingrediens = await db.ingredient.findMany();

    return (
        <div className='mt-2' style={{maxWidth: '800px'}}>
            {/* <CategoryAdmin /> */}
            <ViewAllIngredients ingredients={ingrediens} />
        </div>
    );
}