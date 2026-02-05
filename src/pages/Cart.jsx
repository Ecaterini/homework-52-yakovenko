import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity
} from "../features/cart/cartSlice"
function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h2>Кошик</h2>

      {cartItems.length === 0 && <p>Кошик порожній</p>}

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <p>{item.name}</p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              −
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => dispatch(incrementQuantity(item.id))}>
              +
            </button>
          </div>

          <p>{item.price * item.quantity} €</p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Видалити
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Загальна сума: {totalPrice} €</h3>

          <button onClick={() => dispatch(clearCart())}>
            Очистити кошик
          </button>
        </>
      )}
    </div>
  )
}

export default Cart
