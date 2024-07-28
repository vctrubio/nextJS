import {db} from '../lib/db';

async function deleteAllIngredients() {
    try {
        await db.ingredient.deleteMany();
        console.log('All ingredients deleted successfully.');
    } catch (error) {
        console.error('Error deleting ingredients:', error);
    } finally {
        await db.$disconnect();
    }
}

deleteAllIngredients();