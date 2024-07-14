import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';

//get query from db of ingredients
interface ShowAllProps {
  table: string;
}

//this is wrong for many reasons
const ShowAll = async ({ table }: ShowAllProps) => {
  const ingredients = await db.ingredient.findMany();
  return (
    <>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          {ingredient.name} | {ingredient.category}
        </div>
      ))}
    </>
  )
}

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
            <ShowAll table='sunshine' />
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
