import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

async function userJobArticle(user){
  
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

async function loadJobArticle(id) {
  
  const data = await conn.query(`SELECT * FROM jobs WHERE id = ?`,
  [id]);
  console.log(data[0][0])
  return data[0][0];
}

async function RelatedJobs(type){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/jobs`,
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
  const job = await loadJobArticle(id)
  const typeProduct = job.type
  const user = job.user

  const RelatedJobs = await RelatedJobs(typeProduct)
  const userJobArticle = await userJobArticle(user)
  return (
    <SingleProduct product={job} relatedProducts={RelatedJobs} seller={userJobArticle} />
  );
}

export default ProductPage;