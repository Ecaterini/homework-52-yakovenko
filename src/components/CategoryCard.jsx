import { Link } from "react-router-dom"
import "./CategoryCard.css"

function CategoryCard({ category }) {
  return (
    <Link to={`/catalog/${category.id}`} className="category-card">
      <div className="category-image-wrapper">
        <img
          src={category.image}
          alt={category.title}
          className="category-image"
        />
      </div>

      <div className="category-content">
        <h3>{category.title}</h3>
        <p>{category.products.length} товарів</p>
      </div>
    </Link>
  )
}

export default CategoryCard
