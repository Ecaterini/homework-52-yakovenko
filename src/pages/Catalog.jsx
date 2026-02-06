import { categories } from "../data/categories"
import CategoryCard from "../components/CategoryCard"

function Catalog() {
  return (
    <div className="container">
      <h2>Каталог</h2>

      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  )
}

export default Catalog