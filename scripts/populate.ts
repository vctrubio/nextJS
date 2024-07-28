import { db } from '../lib/db';

async function main() {
  try {
    // Fetch all ingredients from the database
    const allIngredients = await db.ingredient.findMany();
  
    // Log the ingredients to the console
    console.log('All Ingredients:', allIngredients);
  } catch (e) {
    console.error('Error:', e);
  } finally {
    await db.$disconnect();
  }
}

main();
