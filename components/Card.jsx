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
                <div style={{ backgroundColor: 'transparent', width: '100%' }}>
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

export const AdminCardItem = ({ item, setItem }) => {
    //set ony ony admincarditem to be visible - todo
    const [isCardFormVisible, setIsCardFormVisible] = useState(false);

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

    const editIngredient = (item) => {
        setIsCardFormVisible(!isCardFormVisible);
    }

    return (
        <>
            <div className='admin-card'>
                <div className="name" onClick={() => handleChange(item, "name")}>{item.name}</div>
                <div className="category" onClick={() => handleChange(item, "category")}>{item.category}</div>
                <div className="admin-btns">
                    <div onClick={() => deleteIngredient(item.id)}><FaTrash /></div>
                    <div onClick={() => editIngredient(item)}><FcDataConfiguration /></div>
                </div>
            </div>
            {isCardFormVisible && <CardForm ingrediente={item} toggle={() => setIsCardFormVisible(!isCardFormVisible)} />}
        </>
    );
};