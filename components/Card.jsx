'use client'

import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import { FcDataConfiguration } from "react-icons/fc";
import { GiFruitBowl } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { IoIosCart } from "react-icons/io";

import { deleteIngredientDb, updateIngredientDb } from '@/actions/queries';
import { callToast } from "@/actions/toast";
import { CardForm } from "@/components/CardForm";

const rtnCatagoryColor = (category) => {
    if (category.category === 'Fruit') {
        return 'grey'
    }
    else
        return 'grey'
}

const getSvg = (category) => {
    if (category === 'Fruit') {
        return <GiFruitBowl/>
    }
    else if (category === 'Grain')
        return <FaBowlRice/>
    else
        return <IoIosCart/>
}

export const Card = ({ ingredient }) => {
    return (
        <React.Fragment>
            <div className="card-one" style={{ border: `1px solid ${rtnCatagoryColor(ingredient)}` }} >
                <div className="card-avatar">
                    {getSvg(ingredient.category)}
                </div>
                <div style={{ backgroundColor: 'transparent', width: '100%', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {ingredient.name}
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

    return (
        <>
            <div className='admin-card'>
                <div className="name">{item.name}</div>
                <div className="category">{item.category}</div>
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