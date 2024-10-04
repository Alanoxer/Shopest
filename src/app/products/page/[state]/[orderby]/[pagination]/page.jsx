import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadProducts(state, orderby, pagination){
    const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
      {
        params:{
          state: state,
          orderby: orderby,
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
  const {state, orderby, pagination} = params
  const products = await LoadProducts(state, orderby, pagination)

  return (
  <>
   <SearchResults products={products}/>
  </>
  )
}

export default ProductsPage;