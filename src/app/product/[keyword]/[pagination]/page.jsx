import ProductCard from "../../../components/ProductCard";
import axios from "axios";

async function LoadProducts(keyword, pagination){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,{
    params: keyword,
       pagination  })
  const {data} = products
  if(data){
    const products = data[0]
    
    
       return (<>
       {
        products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
         </>)
        }

}

export const dynamic = 'force-dynamic'

async function QueryPage({params}) {
  const {keyword, pagination} = params

  return <div className="ml-12  grid gap-4 grid-cols-4">
    <LoadProducts keyword={keyword} pagination={pagination}/>

    
  </div>;
} 
export default QueryPage;