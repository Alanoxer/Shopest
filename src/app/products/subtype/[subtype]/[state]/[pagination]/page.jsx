import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function subTypeProducts( subtype, pagination, state){
  
  const products = await axios.get(`http://localhost:3000/api/products`,
  {
    params:{
      subtype: subtype,
      pagination: pagination,
      state : state
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
  const {subtype, pagination, state} = params
  const products = await subTypeProducts(subtype, pagination, state)

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