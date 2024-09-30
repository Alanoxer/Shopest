import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

//single product
async function loadProduct(id) {

  const userData = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
    {
      params:{
        id: id
      }
    }
    )
    const {data} = userData
  
    if(data){
         return data
    }
  
}

//seller
async function sellerProduct(user){
  
  const userData = await axios.get(`https://shopest-lyart.vercel.app/api/users`,
  {
    params:{
      email: user
    }
  }
  )
  const {data} = userData

  if(data){
       return data
        }

}

//related products
async function RelatedProducts(types){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      types : types,
      state: "cualquiera",
      pagination: 0
    }
  }
  )
  const {data} = products

  if(data){
       return data[0]
        }

}

async function ProductPage({ params }) {
  const {id} = params
  const product = await loadProduct(id)
  const typeProduct = product.type
  const user = product.user

  const relatedProducts = await RelatedProducts(typeProduct)
  const userProduct = await sellerProduct(user)
  return (
    <SingleProduct product={product} relatedProducts={relatedProducts} seller={userProduct} />
  );
}

export default ProductPage;