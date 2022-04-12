import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartListProvider = (props) => {
  const [cartList, setCartList] = useState([
    {
      id: "1",
      name: "Green Dress For Woman",
      price: "$38.00",
      img: "https://andshop-react.netlify.app/static/media/product9.60333e3e.png",
      img2: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
    },
    {
      id: "2",
      name: "T-Shirt For Men",
      price: "$78.00",
      img: "https://andshop-react.netlify.app/static/media/product10.d71c44ec.png",
      img2: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
    },
    {
      id: "3",
      name: "V-Neck Dress",
      price: "$98.00",
      img: "https://andshop-react.netlify.app/static/media/product6.f19b14e6.png",
      img2: "https://andshop-react.netlify.app/static/media/product1.7190443a.png",
    },
    {
      id: "4",
      name: "Maxi Dress",
      price: "$43.00",
      img: "https://andshop-react.netlify.app/static/media/product7.6533a8ae.png",
      img2: "https://andshop-react.netlify.app/static/media/product10.d71c44ec.png",
    },
  ]);

  return (
    <CartContext.Provider value={[cartList, setCartList]}>
      {props.children}
    </CartContext.Provider>
  );
};
