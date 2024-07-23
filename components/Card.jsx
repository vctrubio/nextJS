'use client'

import React from "react";
import { FaTrash } from 'react-icons/fa';
import { deleteIngredientDb } from '@/actions/queries';
import SvgCart from "@/public/cart.svg"
import { callToast } from "@/actions/toast";

const rtnCatagoryColor = (category) => {

    if (category.category === 'Fruit') {
        return 'grey'
    }
    else
        return 'purple'
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

    const deleteIngredient = async (id) => {
        console.log("🚀 ~ deleteIngredient ~ id:", item.id)
        const res = await deleteIngredientDb(id); // Use id directly
        if (res) {
            setItem((prev) => prev.filter((item) => item.id !== id));
            callToast(item.name, "deleted successfully!");
        }
    };

    return (
        <div className='admin-card'>
            <div className="name">{item.name} [{item.id}]</div>
            <div className="category">{item.category}</div>
            <div className="delete-btn" onClick={() => deleteIngredient(item.id)}><FaTrash /></div>
        </div>
    );
};