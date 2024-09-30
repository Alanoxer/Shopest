import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

async function sellerProduct(user){
  
  const userData = await axios.get(`https://shopest-lyart.vercel.app/api/users`,
  {
    params:{
      email: user
    }
  }
  )
  const {data} = userData
  console.log(data)

  if(data){
       return data
        }

}

async function loadProduct(id) {
  
  const data = await conn.query(`SELECT * FROM product WHERE id = ?`,
  [id]);
  console.log(data[0][0])
  return data[0][0];
}

async function RelatedProducts(types){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
  {
    params:{
      types : types,
      pagination: 0
    }
  }
  )
  const {data} = products
  console.log(data[0])

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