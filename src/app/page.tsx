import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';
import { ViewAllIngredients } from '@/components/ViewAll';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full border">
        <div>
          Homie
        </div>
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
      </div>
    </>
  );
}
