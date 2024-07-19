import ShoppingListPage from '@/src/pages/ShoppingList';
import { getIngredientsDb } from '@/actions/queries';

const Home = async () => {
  const ingredients: any = await getIngredientsDb();
  return (
    <>
      <ShoppingListPage propIngredients={ingredients} />
    </>
  )
}

export default Home;