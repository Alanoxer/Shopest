import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadProducts(pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      pagination : pagination
    }
  }
  )
  const {data} = products
  if(data){
    return data[0]
        }
}

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  const products = await LoadProducts(pagination)

  return (
  <>
   <SearchResults products={products}/>
  </>
  )
}

export default ProductsPage;