import { useContext, useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Storeitem = ({item}) => {
  const {cart, addToCart, removeFromCart, decrementFromCart,incrementQuantity} = useContext(ShoppingCartContext);
  const cartItem = cart.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <>
    <Col>
      <Card>
        <Card.Img variant="top" src={item.imgUrl} className="store-item-img " />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center ">
          <span className="fs-2">{item.name}</span>
          <span className="ms-2 text-muted ">{item.price}$</span>
          </Card.Title>
          {quantity ? (
            <div className="btns d-flex flex-column gap-3 align-items-center">
                <div className="control d-flex gap-2 justify-content-center align-items-center">
                    <Button variant="primary" onClick={()=>incrementQuantity(item)}>+</Button>
                    <p className="m-0">{quantity} in cart</p>
                    <Button variant="primary" onClick={()=>decrementFromCart(item)}>-</Button>
                </div>
                <div className="remove">
                    <Button variant="danger" onClick={()=>removeFromCart(item)}>Remove</Button>
                </div>
            </div>
          ) : (
            <Button variant="primary" className="w-100 mt-3" onClick={()=>addToCart(item)}>Add to cart</Button>
          )}

        </Card.Body>
      </Card>
      </Col>
    </>
  );
};

export default Storeitem;
