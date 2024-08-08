import { createContext, useState } from "react";
export const ShoppingCartContext = createContext();
// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);


  function addToCart(item) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  }
  function removeFromCart(item){
    setCart((prevCart)=>{
      return prevCart.filter((cartItem)=>cartItem.id !== item.id)
    })
  }
  function decrementFromCart(item) {
    setCart((prevCart) => {
      return prevCart.flatMap((cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return [];  
          }
        } else {
          return cartItem;
        }
      });
    });
  }
  
  function incrementQuantity(item) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) =>{
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }else{
          return cartItem;
        }
      })
    });
  }
  return (
    <ShoppingCartContext.Provider value={{cart, addToCart, removeFromCart, decrementFromCart,incrementQuantity,setShow,show}}>
    {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
