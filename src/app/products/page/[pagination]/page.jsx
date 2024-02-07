
import ProductCard from "../../../components/ProductCard";
import { db } from "@vercel/postgres";


async function loadProducts(pagination) {
  const client = await db.connect()

  await client.sql`CREATE TABLE IF NOT EXISTS product (   id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image VARCHAR(200),
    price DECIMAL(10,2),
    created_at TIMESTAMP NOT NULL ) `;

  const products = await client.sql`SELECT * FROM product LIMIT 2 OFFSET ${pagination * 2}`
  
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
        <ProductCard product={product} key={product.id} />
    ))}
  </div>;
}

export default ProductsPage;