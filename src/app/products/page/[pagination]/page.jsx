import ProductCard from "../../../components/ProductCard";
import axios from "axios";
import { conn } from "@/libs/mysql";




async function loadProducts(pagination) {
    const results = await conn.query(
      'SELECT * FROM product LIMIT 8 OFFSET ?',
  [pagination * 2])
  
  return results[0]
  
}

// async function LoadProducts(pagination){
  
//   const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,{
//     params: pagination  })
//   const {data} = products
//   if(data){
//     const products = data[0]
//        return (<>
//        {
//         products.map(product => (
//           <ProductCard product={product} key={product.id} />

          
//         ))}
//          </>)
//         }

// }

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  const products = await loadProducts(pagination)

  return (
  <div className=" mx-40 grid gap-8 ml-80">
    {/* <LoadProducts pagination={pagination}/> */}


    { products &&
    products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>
  )
}

export default ProductsPage;