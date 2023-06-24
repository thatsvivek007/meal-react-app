import React from "react";

const CartContext = React.createContext({
    totalAmount: 0,
    items: [],
    addItem: () =>{},
    removeItem: () =>{}
});

export default CartContext;