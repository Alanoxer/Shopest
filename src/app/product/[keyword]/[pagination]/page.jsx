import ProductCard from "../../../components/ProductCard";
import { conn } from "@/libs/mysql";

async function queryProduct(query, pagination) {

  const data = await conn.query(`SELECT * FROM product WHERE name LIKE  "%?%" LIMIT 1 OFFSET ?`,
  [query, pagination * 1]);
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