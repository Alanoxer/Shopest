
import ProductCard from "../../../components/ProductCard";
import { conn } from "@/libs/mysql";


async function loadProducts(pagination) {
  

  const products = await conn.query(`SELECT * FROM product LIMIT 2 OFFSET ?`,
  [pagination * 2])
  
  return [products]
}

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  const products = await loadProducts(pagination);
  

  return <div className=" mx-20 grid gap-4 
  sm:h:40 sm:grid-cols-2 sm:mx-16
  md:grid-cols-3 md:mx-24
  lg:grid-cols-4 lg:mx-32
  xl:grid-cols-5 
  ">
    {products.map(product => (
        <ProductCard product={product} key={product.product_id} />
    ))}
  </div>;
}

export default ProductsPage;