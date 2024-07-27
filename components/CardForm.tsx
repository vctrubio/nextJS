"use client";

import React, { useState, useRef } from "react";
import { db } from "@/lib/db";
import { Ingredient, Category } from "@prisma/client";
import { deleteIngredientDb, updateIngredientDb } from "@/actions/queries";
import { callToast, callToastError } from "@/actions/toast";
import { useRouter } from 'next/router';

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

interface CardFormProps {
  ingrediente: Ingredient;
  toggle: () => void; // Define toggle as a function that returns void
}

export const CardForm: React.FC<CardFormProps> = ({ ingrediente, toggle }) => {
  const [ingredient, setIngredient] = useState(ingrediente);
  const categories = Object.keys(Category);
  const useRef = React.useRef(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredient((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string) => {
    setIngredient((prev: any) => ({ ...prev, category }));
  };

  const toggleRefresh = () => {
    toggle();
    //refreshpage
  }

  const handleSave = async () => {
    const result = await updateIngredientDb(ingredient);
    if (result) {
      callToast(ingredient.name, " updated successfully");
    } else {
      callToastError(ingredient.name, " update failed");
    }
    toggleRefresh();
  }

  const handleDelete = async () => {
    const result = await deleteIngredientDb(ingrediente.id);
    if (result) {
      callToast(ingredient.name, " deleted successfully");
    } else {
      callToastError(ingredient.name, " delete failed");
    }
    toggleRefresh();
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSave();
    }
    //only working when i click on the input field
  };

  return (
    <div className="card-form" ref={useRef} onKeyDown={handleKeyDown}>
      <div className="close-icon" onClick={() => toggle()}>x</div>
      <div className="id"> Ingredient [{ingrediente.id}]</div>
      <input
        className="name"
        name="name"
        placeholder={ingrediente.name}
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
