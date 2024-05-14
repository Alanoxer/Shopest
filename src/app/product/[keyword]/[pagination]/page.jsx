import ProductCard from "../../../components/ProductCard";
import axios from "axios";

// async function loadProducts(keyword, pagination){
//   const products = await conn.query("SELECT * FROM product WHERE name LIKE ? LIMIT 2 OFFSET ?",[
//     keyword, pagination * 1
//   ])
//   console.log(products[0])

//   return products[0]

  
// }

async function LoadProducts(keyword, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      pagination : pagination,
      keyword: keyword
    }
  }
  )
  const {data} = products
  if(data){
       return data[0]
        }

}

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {
  const {keyword, pagination} = params
  const products = await LoadProducts(keyword, pagination)

  return <div className="-mt-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-20 grid gap-8 ml-60">
      { products &&
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))
      }
    
  </div>;
} 
export default QueryPage;