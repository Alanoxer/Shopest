import axios from "axios";
import SearchResults from "@/app/components/SearchResults";

async function LoadCommunityArticles(pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/community`,
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
  const communityArticles = await LoadCommunityArticles(pagination)

  return <SearchResults products={communityArticles}/>
}

export default ProductsPage;