import { useParams, useNavigate } from "react-router-dom"
import { categories } from "../data/categories"
import ProductCard from "../components/ProductCard"

function Category() {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const category = categories.find(
    (cat) => cat.id === categoryId
  )

  if (!category) {
    return <h2>Категорія не знайдена</h2>
  }

  return (
    <div className="category-page">
      <button
        className="back-btn"
        onClick={() => navigate("/catalog")}
      >
        ← Назад
      </button>

      <h2 className="category-title">{category.title}</h2>

      <div className="products-grid">
        {category.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Category