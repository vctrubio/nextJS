import ShoppingListPage from '@/src/pages/ShoppingList';
import { getIngredientsDb } from '@/actions/queries';
import {CardForm} from '@/components/CardForm.tsx';

const Home = async () => {
  const ingredients: any = await getIngredientsDb();

  return (
    <>
      {/* <ShoppingListPage propIngredients={ingredients} /> */}
      <CardForm ingrediente={ingredients[0]}/>
    </>
  )
}

export default Home;