'use client'

import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import { FcDataConfiguration } from "react-icons/fc";
import { deleteIngredientDb, updateIngredientDb } from '@/actions/queries';
import SvgCart from "@/public/cart.svg"
import { callToast } from "@/actions/toast";
import { CardForm } from "@/components/CardForm";

const rtnCatagoryColor = (category) => {

    if (category.category === 'Fruit') {
        return 'grey'
    }
    else
        return 'grey'
}

export const Card = ({ ingredient }) => {
    return (
        <React.Fragment>
            <div className="card-one" style={{ border: `1px solid ${rtnCatagoryColor(ingredient)}` }} >
                <div className="card-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {ingredient.name}
                    {/* , {ingredient.category} */}
                </div>
            </div>
        </React.Fragment>
    )
}

export const CardSample = () => {

    return (
        <React.Fragment>
            <div className="card-one" style={{ borderColor: 'red' }} >
                <div className="card-avatar">
                    <SvgCart width={50} height={50} />
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%' }}>
                    Apples
                </div>
            </div>
        </React.Fragment>
    )
}

export const AdminCardItem = ({ item, setItem, isOpen, toggleCard }) => {
    const deleteIngredient = async (id) => {
        const res = await deleteIngredientDb(id);
        if (res) {
            setItem((prev) => prev.filter((item) => item.id !== id));
            callToast(item.name, "deleted successfully!");
        }
    };

    const handleChange = async (item, param) => {
        updateIngredientDb(item.id, param);
    }  

    return (
        <>
            <div className='admin-card'>
                <div className="name" onClick={() => handleChange(item, "name")}>{item.name}</div>
                <div className="category" onClick={() => handleChange(item, "category")}>{item.category}</div>
                <div className="admin-btns">
                    <div onClick={() => deleteIngredient(item.id)}><FaTrash /></div>
                    <div onClick={() => toggleCard(item.id)}><FcDataConfiguration /></div>
                </div>
            </div>
            {isOpen &&
                <CardForm ingrediente={item}
                    toggle={() => toggleCard(item.id)}
                    deleteIngredient={deleteIngredient}
                    setUpIngredient={setItem}
                />}
        </>
    );
};