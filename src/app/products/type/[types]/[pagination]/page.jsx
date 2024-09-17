import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function typeProducts(types, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      types : types,
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

async function TypesPage({params}) {
  const {types, pagination} = params
  const products = await typeProducts(types, pagination)

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
export default TypesPage;