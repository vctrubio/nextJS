import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';
import { ViewAllIngredients } from '@/components/ViewAll';
import { Card, CardSample } from '@/components/Card';
import { LeftNavBar } from '@/components/LeftNavBar';
import ShoppingListPage from '@/pages/ShoppingList';
export default function Home() {
  return (
    <>
      <div className="flex flex-row border">
        <LeftNavBar />
        <ShoppingListPage/>

      </div>
    </>
  );
}

/*
 <ul>
          <li>
            - query db to see ingredients
            <ViewAllIngredients/>
          </li>
          <li>
            - create ingredient form
            <AddIngredient />
            
          </li>
          <li>
            - create cart to select ingredient
          </li>  
</ul>       
*/