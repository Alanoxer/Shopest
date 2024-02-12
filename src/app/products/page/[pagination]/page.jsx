
import ProductCard from "../../../components/ProductCard";
import { conn } from "@/libs/mysql";


async function loadProducts(pagination) {

  try{  await conn.query(`CREATE TABLE IF NOT EXISTS product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200),
    image VARCHAR(200),
    price DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`)
    
    const products = await conn.query(`SELECT id,name,description,image,price FROM product LIMIT 8 OFFSET ?`,
  [pagination * 2])
  
  return products
  }catch(e){if(e) return e

  }
  
}

export const dynamic = 'force-dynamic'

async function ProductsPage({params}) {
  const {pagination} = params
  const products = await loadProducts(pagination);
  console.log(products)
  

  return <div className=" mx-20 grid gap-4 
  sm:h:40 sm:grid-cols-2 sm:mx-16
  md:grid-cols-3 md:mx-24
  lg:grid-cols-4 lg:mx-32
  xl:grid-cols-5 
  ">
    {products.map(product => (
        <ProductCard product={product} key={product.id} />
    ))}
  </div>;
}

export default ProductsPage;