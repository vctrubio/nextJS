"use client"
import { toast } from 'react-hot-toast';
//https://react-hot-toast.com/docs/toast

export const callToast = (prop) => {
    toast.success(`${prop} added successfully!`,{
        position: 'bottom-left',
    });

}
