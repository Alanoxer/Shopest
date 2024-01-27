
import ProductCard from "../components/ProductCard";
import {connection} from '@/libs/mysql'

async function loadProducts() {
  const products = await connection.query('SELECT * FROM product')
  return products
}

export const dynamic = 'force-dynamic'

async function ProductsPage() {
  const products = await loadProducts();
  

  return <div className=" mx-20 grid gap-4 
  sm:h:40 sm:grid-cols-2 sm:mx-16
  md:grid-cols-3 md:mx-24
  lg:grid-cols-4 lg:mx-32
  xl:grid-cols-5 
  ">
    {products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>;
}

export default ProductsPage;