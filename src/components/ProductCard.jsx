import "./ProductCard.css"
import { useDispatch } from "react-redux"
import { addToCart } from "../features/cart/cartSlice"

function ProductCard({ product }) {
  const dispatch = useDispatch()  

  return (
    <div className="product-card">
      <div>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{product.price} €</p>
      </div>

      <button
        className="product-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Додати в кошик
      </button>
    </div>
  )
}

export default ProductCard
