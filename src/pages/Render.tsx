import ShoppingListPage from '@/src/pages/ShoppingList';
import { getIngredientsDb } from "@/actions/queries";

/**
getStaticProps or getServerSideProps for catching
server-side rendering

getStaticPaths for dynamic routes
 
*/

export default function Render(props: { ingredients: any; }) {
  const { ingredients } = props;
  console.log('helloworld2 client');
  return (
    <>
      <ShoppingListPage propIngredients={ingredients}/>
    </>
  );
}

export async function getServerSideProps() {
  const ingredients = await getIngredientsDb();
    console.log('helloworld');
  return {
        
      props: {
          initialIngredients: ingredients,
      },
  };
}