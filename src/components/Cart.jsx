import { useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const {show , setShow , cart} = useContext(ShoppingCartContext)
    const[totalPrice,setTotalPrice] = useState(0);
    useEffect(()=>{
      const calculatedTotalPrice = cart.reduce((total,item)=>{
          return total + item.price * item.quantity;
      },0)
      setTotalPrice(calculatedTotalPrice.toFixed(2))

  },[cart])
  return (
    <>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItem  />
        {totalPrice > 0 ? (<h1 className="fs-4 d-flex  flex-row-reverse">Total {totalPrice}$</h1>) : ("")}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
