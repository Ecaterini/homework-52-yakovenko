import { categories } from "../data/categories"
import CategoryCard from "../components/CategoryCard"

function Catalog() {
  return (
    <div className="categories-grid">
    <div>
      <h2>Каталог</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Catalog