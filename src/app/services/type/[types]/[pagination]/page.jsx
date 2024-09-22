import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function typeServices(types, pagination){
  
  const services = await axios.get(`https://shopest-lyart.vercel.app/api/services`,
  {
    params:{
      types : types,
      pagination: pagination
    }
  }
  )
  const {data} = services
  console.log(data[0])

  if(data){
       return data[0]
        }

}

export const dynamic = 'force-dynamic'

async function TypesPage({params}) {
  const {types, pagination} = params
  const services = await typeServices(types, pagination)

  return (
  <>
    { services.length !== 0 ? 
    <>
      <SearchResults products={services}/>
    </>
    : <div>No hay resultados </div>
    }
  </>
)
  } 
export default TypesPage;