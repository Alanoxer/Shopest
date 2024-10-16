import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadServices(pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/services`,
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
  const services = await LoadServices(pagination)

  return <SearchResults products={services}/>
}

export default ProductsPage;