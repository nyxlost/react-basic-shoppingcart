// * Component for manage cart
import { MyCartContext } from "../management/context"
import CartItem from "./CartItem"

const Cart = () => {
    const {cart,total,formatNumber} = MyCartContext()
    if(cart.length === 0) {
        return(
            <div className="shopping-cart">
                <div className="empty">Not Have Product</div>
            </div>
        )
    } else {
        return(
            <div className="shopping-cart">
                <div className="title">Product in Cart</div>
                    {cart.map((data) => {
                        return(
                            <CartItem key={data.id} {...data}/>
                        )
                    })}
                <div className="footer">Total payment {formatNumber(total)} Bath</div>
            </div>
        )
    }
}
export default Cart