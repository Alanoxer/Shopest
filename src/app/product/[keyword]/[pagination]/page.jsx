import ProductCard from "../../../components/ProductCard";
import axios from "axios";
import SearchResults from "@/app/components/SearchResults";


async function LoadProducts(keyword, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      pagination : pagination,
      keyword: keyword
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

  return <>
    <SearchResults products={products}/>
       {/* { products &&
          products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))
        }
    </SearchResults> */}
         </>;
  } 
export default QueryPage;