import { useContext} from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { Button, Image } from "react-bootstrap"
import "./CartItem.css"

const CartItem = () => {
    const {cart,removeFromCart} = useContext(ShoppingCartContext)
  return (
    <>
        {cart.map((item)=>{
            return (
                <div className="CartItem mb-3" key={item.id}>
                    <div className="img">
                        <Image src={item.imgUrl} thumbnail width={"120px"} />
                    </div>
                        <div className="info">
                            <div className="name">
                                <h3 className="fs-5">{item.name}
                                    <p className="fs-6 text-muted">x{item.quantity}</p>
                                </h3>
                                <p className="text-muted">{item.price}$</p>
                            </div>
                            <div className="price">
                                <h3 className="fs-5">
                                {
                                    item.price * item.quantity
                                }
                                $
                                </h3>
                                <Button onClick={()=>removeFromCart(item)} size="sm" variant="danger">X</Button>

                            </div>
                        </div>

                </div>
            )
        })}
    </>
  )
}

export default CartItem