'use client'

import { useState } from 'react';
import { db } from '@/lib/db';
import { AddIngredient } from '@/components/Form';
import { ViewAllIngredients } from '@/components/ViewAll';
import { LeftNavBar } from '@/components/LeftNavBar';
import ShoppingListPage from '@/src//pages/ShoppingList';

import AdminPanel from '@/components/AdminPanel';
import { pages } from 'next/dist/build/templates/app-page';

export enum PageSelection {
  Home = 'home',
  Admin = 'admin',
}

export default function Home() {
  const [pageSelect, setPageSelect] = useState(PageSelection.Home);

  const RenderBar = () => {
    switch (pageSelect) {
      case PageSelection.Admin:
        return <AdminPanel />;
      case PageSelection.Home:
          return <ShoppingListPage />;
      default:
        return <div><h1>Not Found 404...</h1></div>;
    }
  };

  return (
    <>
      <div className="flex flex-row border">
        <LeftNavBar onSelect={setPageSelect}/>
        <RenderBar />
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