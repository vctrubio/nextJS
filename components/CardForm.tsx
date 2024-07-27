"use client";

import React, { useState } from "react";
import { db } from "@/lib/db";
import { Ingredient, Category } from "@prisma/client";
import { deleteIngredientDb, updateIngredientDb } from "@/actions/queries";
import { callToast, callToastError } from "@/actions/toast";
interface DropdownProps {
  value: string;
  setValue: (value: string) => void;
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ value, setValue, options }) => {
  return (
    <div className="select-headless">
      <select value={value} onChange={(e) => setValue(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};


export const CardForm = (ingrediente: Ingredient) => {
  const i = ingrediente.ingrediente;
  const [ingredient, setIngredient] = useState(i);
  const categories = Object.keys(Category);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredient((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setIngredient((prev: any) => ({ ...prev, category }));
  };

  const handleSave = async () => {
    const result = await updateIngredientDb(ingredient);
    if (result) {
      callToast( ingredient.name , " updated successfully");
    } else {
      callToastError( ingredient.name, " update failed");
    }
  }

  const handleDelete = async () => {
    const result = await deleteIngredientDb(i.id);
    if (result) {
      callToast( ingredient.name , " deleted successfully");
    } else {
      callToastError( ingredient.name, " delete failed");
    }
  }

  return (
    <div className="card-form">
      <div className="close-icon">x</div>
      <div className="id"> Ingredient [{i.id}]</div>
      <input
        className="name"
        name="name"
        placeholder={i.name}
        value={ingredient.name}
        onChange={handleChange}
      />
      <Dropdown value={ingredient.category} setValue={handleCategoryChange} options={categories} />
      <div className="btns">
        {/* <button className="edit">Edit</button> */}
        <button className="save" onClick={handleSave}>Save</button>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
