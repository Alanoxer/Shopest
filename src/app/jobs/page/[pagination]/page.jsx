import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadJobs(pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/jobs`,
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
  const jobs = await LoadJobs(pagination)

  return (
  <>
   <SearchResults products={jobs}/>
       {/* { products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
    </SearchResults> */}
  </>
  )
}

export default ProductsPage;