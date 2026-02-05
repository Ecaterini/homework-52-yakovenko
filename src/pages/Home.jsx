import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'

function Home() {
  return (
    <div className="categories-grid">
    <div>
      <h2>Категорії товарів</h2>

      <div style={{ display: 'flex', gap: '20px' }}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
     </div>
  )
}

export default Home