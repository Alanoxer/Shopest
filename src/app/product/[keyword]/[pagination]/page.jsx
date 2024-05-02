import ProductCard from "../../../components/ProductCard";
import { conn } from "@/libs/mysql";

async function loadProducts(keyword, pagination){
  const products = await conn.query("SELECT * FROM product WHERE name LIKE ? LIMIT 2 OFFSET ?",[
    keyword, pagination * 1
  ])
  console.log(products[0])

  return products[0]

  
}

// async function LoadProducts(keyword, pagination){
  
//   const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,{
//     params: keyword,
//        pagination  })
//   const {data} = products
//   if(data){
//     const products = data[0][0]
//     console.log(data[0][0])
    
    
//        return (<>
//        {
//         products.map(product => (
//           <ProductCard product={product} key={product.id} />
//         ))}
//          </>)
//         }

// }

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {
  const {keyword, pagination} = params
  const products = await loadProducts(keyword, pagination)

  return <div className="mx-40 grid gap-8 ml-60">
    {/* <LoadProducts keyword={keyword} pagination={pagination}/> */}
      {
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    
  </div>;
} 
export default QueryPage;