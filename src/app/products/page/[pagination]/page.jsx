import ProductCard from "../../../components/ProductCard";
import axios from "axios";

async function LoadProducts(pagination){
  
  const products = await axios.get(`/api/products`,
  {
    params:{
      pagination : pagination
    }
  }
  )
  
  const {data} = products
  if(data){
    console.log(data)
    return data[0]
        }
}

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  const products = await LoadProducts(pagination)

  return (
  <div className=" -mt-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-20 grid gap-8 ml-60">

    { products &&
    products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>
  )
}

export default ProductsPage;