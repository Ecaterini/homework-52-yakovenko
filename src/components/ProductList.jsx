import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function ProductList() {
  const products = useSelector((state) => state.products.items)

  return (
    <div>
      <h2>Товари для кондитера</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList