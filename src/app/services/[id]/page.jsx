import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

async function userServicesArticle(user){
  
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

async function loadService(id) {
  
  const data = await conn.query(`SELECT * FROM services WHERE id = ?`,
  [id]);
  console.log(data[0][0])
  return data[0][0];
}

async function RelatedServices(type){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/services`,
  {
    params:{
      type : type,
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
  const services = await loadService(id)
  const typeService = services.type
  const user = services.user

  const RelatedServices = await RelatedServices(typeService)
  const userServicesArticle= await userServicesArticle(user)
  return (
    <SingleProduct product={services} relatedProducts={RelatedServices} seller={userServicesArticle} />
  );
}

export default ProductPage;