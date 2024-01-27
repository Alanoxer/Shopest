// import { connection } from "@/libs/mysql"

// import ProductCard from "../../components/";

// async function queryProduct({keyword}) {
//     const products  = await connection.query('SELECT * FROM product WHERE name = "?"', [
//       keyword,
//     ]);
//     return products;
//   }

// async function QueryPage({keyword}){

//   const products = await queryProduct({keyword});
//   console.log(products)

//     return <div className=" ml-8 grid gap-4 grid-cols-4 ">
//     {products.map(product => (
//         <ProductCard product={product} key={product.id} />
//     ))}
//   </div>;
//     }

//     export default QueryPage

import ProductCard from "../../components/ProductCard";
import {connection} from '@/libs/mysql'

async function queryProduct(query) {
  const data = await connection.query('SELECT * FROM product WHERE name LIKE  ? ', [
          query,
        ]);
  return data
}

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {
  const products = await queryProduct(params.keyword);
  console.log(products)

  return <div className="ml-12  grid gap-4 grid-cols-4">
    {products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>;
} 

export default QueryPage;