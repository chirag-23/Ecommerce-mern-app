import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state,action)=>{
            // Gives New State
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += (action.payload.price) * (action.payload.quantity)
        },
        clearCart: (state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }

    }
})

export const { clearCart, addProduct } = cartSlice.actions
export default cartSlice.reducer;