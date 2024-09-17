import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";
import axios from "axios";

async function userCommunityArticle(user){
  
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

async function loadCommunityArticle(id) {
  
  const data = await conn.query(`SELECT * FROM community WHERE id = ?`,
  [id]);
  console.log(data[0][0])
  return data[0][0];
}

async function RelatedCommunityArticles(type){
  
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/community`,
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
  const communityArticle = await loadCommunityArticle(id)
  const typeProduct = communityArticle.type
  const user = communityArticle.user

  const RelatedCommunityArticles = await RelatedCommunityArticles(typeProduct)
  const userCommunityArticle = await userCommunityArticle(user)
  return (
    <SingleProduct product={communityArticle} relatedProducts={RelatedCommunityArticles} seller={userCommunityArticle} />
  );
}

export default ProductPage;