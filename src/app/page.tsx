import ShoppingListPage from '@/src/pages/ShoppingList';
import { getIngredientsDb } from "@/actions/queries";
import Render from '../pages/Render';

/**
getStaticProps or getServerSideProps for catching
server-side rendering

getStaticPaths for dynamic routes
 
*/

export default function Home(props: { ingredients: any; }) {
  const { ingredients } = props;

  return (
      <Render/>
  );
}
