import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaShoppingCart, FaBars } from "react-icons/fa"
import { useSelector } from "react-redux"
import CartModal from "../CartModal/CartModal"
import logo from "../../assets/logo.png"
import "./Header.css"

function Header({ onContactsClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.items)

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <>
      <header className="header">
        <img
          src={logo}
          alt="Магазин для кондитерів"
          className="logo-img"
        />

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link">
            Головна
          </NavLink>

          <NavLink to="/catalog" className="nav-link">
            Каталог
          </NavLink>

          <button
            className="nav-link"
            onClick={onContactsClick}
          >
            Контакти
          </button>
        </nav>

        <div className="header-actions">
          <button
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <FaBars size={22} />
          </button>

          <div
            className="cart-icon"
            title="Кошик"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart size={22} />

            {totalQuantity > 0 && (
              <span className="cart-count">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </header>

      {isCartOpen && (
        <CartModal onClose={() => setIsCartOpen(false)} />
      )}
    </>
  )
}

export default Header
