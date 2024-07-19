import ShoppingListPage from '@/src/pages/ShoppingList';
import { getIngredientsDb } from "@/actions/queries";

/**
getStaticProps or getServerSideProps for catching
server-side rendering

getStaticPaths for dynamic routes
 
*/

export default function Render(props: { initialIngredients: any; }) {
  const { initialIngredients } = props;
  return (
    <>
    
      <ShoppingListPage propIngredients={initialIngredients} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const ingredients = await getIngredientsDb();
    console.log('helloworld');
    return {
      props: {
        initialIngredients: ingredients,
      },
    };
  } catch (error) {
    console.error('Error fetching ingredients:', error);
    return {
      props: {}, // Return empty props or set a default value
    };
  }
}