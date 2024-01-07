import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
         name:'cart',
         initialState:{
            items:[],
         },
         reducers:{
            addItem:(state, action)=>{
               state.items.push(action.payload);  
            },
            removeItem:(state, action)=>{
               state.items.pop();
            },
            clearCart:(state,action)=>{
               state.items.length = 0;
            }
         }
});


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export const selectCart = (state) => state?.cart?.items;
export default cartSlice.reducer;