"use client";

import React, { useState } from "react";
import { db } from "@/lib/db";
import { Ingredient, Category } from "@prisma/client";

interface DropdownProps {
  value: string; // Adjust the type according to your actual data structure
  setValue: (value: string) => void; // Adjust the type according to your actual data structure
  options: string[]; // Adjust the type according to your actual data structure
}

const Dropdown: React.FC<DropdownProps> = ({ value, setValue, options }) => {
  console.log("🚀 ~ value:", value)
  console.log("🚀 ~ options:", options)

  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const CardForm = (ingrediente: Ingredient) => {
  const i = ingrediente.ingrediente;
  const [ingredient, setIngredient] = useState(i);
  const categories = Object.keys(Category);
  console.log("🚀 ~ CardForm ~ categories:", categories)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredient((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setIngredient((prev: any) => ({ ...prev, category }));
  };

  return (
    <>
      <Dropdown value='Fruit' setValue={handleCategoryChange} options={categories}>
      </Dropdown>
      <div className="card-form">
        <div className="id"> Ingredient [{i.id}]</div>
        <input
          className="name"
          name="name"
          placeholder={i.name}
          value={ingredient.name}
          onChange={handleChange}
        />
        <input
          className="category"
          name="category"
          value={ingredient.category}
          placeholder={i.category}
          onChange={handleChange}
        />
        <div className="btns">
          {/* <button className="edit">Edit</button> */}
          <button className="save">Save</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>

  );
};
