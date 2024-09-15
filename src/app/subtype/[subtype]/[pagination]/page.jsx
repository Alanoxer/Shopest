import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function subTypeProducts( subtype, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      subtype: subtype,
      pagination: pagination
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

async function SubTypesPage({params}) {
  const {subtype, pagination} = params
  const products = await subTypeProducts(subtype, pagination)

  return (
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
export default SubTypesPage;