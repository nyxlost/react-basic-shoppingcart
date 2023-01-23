import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import close from '../image/close.svg'
import { MyCartContext } from '../management/context'

// * Show list product

const CartItem = ({id,name,image_url,price,quantity}) => {
    const {removeItem, toggleQuantity, formatNumber} = MyCartContext()
    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt=""/>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>Price {formatNumber(price)} Bath</span>
            </div>
            <div className='quantity'>
                <button className='plus-btn' onClick={() => toggleQuantity(id,"increment")}>
                    <img src={plus} alt=""/>
                </button>
                <input type="text" value={quantity} disabled/>
                <button className='minus-btn' onClick={() => toggleQuantity(id,"decrement")}>
                    <img src={minus} alt=""/>
                </button>
            </div>
            <div className='total-price'>
                {formatNumber(quantity * price)}
            </div>
            <div className='remove' onClick={() => removeItem(id)}>
                <img src={close} alt="" />
            </div>
        </div>
    )
}
export default CartItem