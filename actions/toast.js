import toast from 'react-hot-toast';

export const callToast = () => {
    toast.success('Ingredient added successfully!');
    console.log('toast.sucess() called');
}