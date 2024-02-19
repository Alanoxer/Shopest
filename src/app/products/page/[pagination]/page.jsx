import ProductCard from "../../../components/ProductCard";
import axios from "axios";




// async function loadProducts(pagination) {
//     const results = await conn.query(
//       'SELECT id,name,description,image,price FROM `product` LIMIT 8 OFFSET ?',
//   [pagination * 2])
  
//   return results
  
// }

async function LoadProducts(pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,{
    params: pagination  })
  const {data} = products
  if(data){
    const products = data[0]
       return (<>
       {
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
         </>)
        }

}

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  return <div className=" mx-20 grid gap-4 
  sm:h:40 sm:grid-cols-2 sm:mx-16
  md:grid-cols-3 md:mx-24
  lg:grid-cols-4 lg:mx-32
  xl:grid-cols-5 
  ">
    <LoadProducts pagination={pagination}/>


    {/* { 
    products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))} */}
  </div>;
}

export default ProductsPage;