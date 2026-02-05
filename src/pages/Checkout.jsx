import { useSelector, useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !phone || !address) {
      alert("Будь ласка, заповніть всі поля")
      return
    }

    alert("Замовлення успішно оформлено! 🎉")

    dispatch(clearCart())
    navigate("/")
  }

  if (cartItems.length === 0) {
    return <h2>Кошик порожній 🛒</h2>
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Оформлення замовлення</h2>

      <h3>Ваше замовлення:</h3>
      {cartItems.map((item) => (
        <p key={item.id}>
          {item.name} — {item.quantity} × {item.price} €
        </p>
      ))}

      <h3>Разом: {totalPrice} €</h3>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Імʼя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Адреса доставки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Підтвердити замовлення
        </button>
      </form>
    </div>
  )
}

export default Checkout
