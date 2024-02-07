import ProductCard from "../../../components/ProductCard";
import { db } from "@vercel/postgres";

async function queryProduct(query, pagination) {
  const client = await db.connect()

  const data = await client.sql`SELECT * FROM product WHERE name LIKE  "%${query}%" LIMIT 1 OFFSET ${pagination * 1} `;
  return [data]
}

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {

  const products = await queryProduct(params.keyword, params.pagination );
  console.log(products)

  return <div className="ml-12  grid gap-4 grid-cols-4">
    {products ?? products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>;
} 

export default QueryPage;