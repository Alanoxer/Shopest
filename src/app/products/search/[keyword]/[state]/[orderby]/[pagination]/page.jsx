import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function LoadProducts(keyword, state, orderby, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      query : keyword,
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

async function QueryPage({params}) {
  const {keyword, state, orderby, pagination} = params
  const products = await LoadProducts(keyword, state, orderby, pagination)

  return(
  <>
    { products.length !== 0 ? 
    <>
      <SearchResults products={products}/>
    </>
    : <div>No hay resultados </div>
    }
  </>
  )
} 
export default QueryPage;