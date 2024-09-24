import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function LoadProducts(keyword, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products/query/${keyword}`,
  {
    params:{
      pagination : pagination
    }
  }
  )
  const {data} = products
  console.log(data[0])

  if(data){
       return data[0]
        }

}

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {
  const {keyword, pagination} = params
  const products = await LoadProducts(keyword, pagination)

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