"use client"
import { toast } from 'react-hot-toast';
//https://react-hot-toast.com/docs/toast

export const callToast = (prop, msg) => {
    toast.success(`${prop} ${msg}`,{
        position: 'bottom-left',
    });
}

export const callToastError = (prop, msg) => {
    toast.error(`${prop} ${msg}`,{
        position: 'bottom-left',
    });
}