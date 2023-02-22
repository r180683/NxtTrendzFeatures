// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(each => {
        const a = each.quantity * each.price
        totalAmount += a
      })
      return (
        <div className="summary-container">
          <div className="summary-text-container">
            <h1 className="total-order">
              Order Total:{' '}
              <span className="total-amount">{`Rs ${totalAmount}/-`}</span>
            </h1>
            <p className="cart-length">{cartList.length} items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
