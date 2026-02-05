import { useDispatch, useSelector } from "react-redux"
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity
} from "../../features/cart/cartSlice"
import { useNavigate } from "react-router-dom"
import "./CartModal.css"

function CartModal({ onClose }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Кошик</h2>

        {cartItems.length === 0 && <p>Кошик порожній</p>}

        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <p className="cart-name">{item.name}</p>

              <div className="cart-quantity">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <p>
                {item.quantity} × {item.price} €
              </p>
            </div>

            <button
              className="remove-btn"
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Видалити
            </button>
          </div>
        ))}

        {cartItems.length > 0 && (
          <>
            <h3>Разом: {totalPrice} €</h3>

            <button
              className="checkout-btn"
              onClick={() => {
                onClose()
                navigate("/checkout")
              }}
            >
              Оформити замовлення
            </button>

            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Очистити кошик
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartModal
