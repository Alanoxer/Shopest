
import { conn } from "@/libs/mysql";
import SingleProduct from "@/app/components/SingleProduct";


async function loadProduct(id) {
  
  const data = await conn.query(`SELECT * FROM product WHERE id = ?`,
  [id]);
  console.log(data[0][0])
  return data[0][0];
}

async function ProductPage({ params }) {
  const {id} = params
  const product = await loadProduct(id)
  return (
    <SingleProduct product={product}/>
  );
}

export default ProductPage;