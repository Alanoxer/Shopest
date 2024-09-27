import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadProducts(pagination, state){
    const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
      {
        params:{
          state: state,
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
  const {pagination, state} = params
  const products = await LoadProducts(pagination, state)

  return (
  <>
   <SearchResults products={products}/>
  </>
  )
}

export default ProductsPage;