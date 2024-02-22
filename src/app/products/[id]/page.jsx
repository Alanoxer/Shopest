import Buttons from "./Buttons";
import { conn } from "@/libs/mysql";


async function loadProduct(id) {
  
  const data = await conn.query(`SELECT * FROM product WHERE id = ?`,
  [id]);
  console.log(data[0])
  return data[0][0];
}

// async function LoadProduct(id){

  
//   const products = await axios.get(`http://localhost:3000/api/products/${id}`,{
//     params: id
//   })
  
//   const {data} = products

//   if(data){
//     const product = data[0][0]
 
//   console.log(`product: ${data[0][0]}`)
//        return (<>
       
//         <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
//         <div className="flex w-4/6 h-2/6 justify-center">
//           <div className="p-6 bg-white w-1/3">
//             <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
//             <h4 className="text-4xl font-bold">{product.price}$</h4>
//             <p className="text-slate-700">{product.description}</p>
//             <Buttons productId={product.id} />
//           </div>
//           <img src={product.image} className="w-1/3" alt="" />
//         </div>
//       </section>
       
//          </>)
//         }

// }

async function ProductPage({ params }) {
  const {id} = params
  const product = await loadProduct(id)
  return (
    // <LoadProduct id={params.id}/>
    <section className="flex justify-center items-center h-[calc(100vh-10rem)] rounded-lg">
      <div className="flex w-4/6 h-2/6 justify-center">
        <div className="p-6 bg-white w-1/3">
          <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
          <h4 className="text-4xl font-bold">{product.price}$</h4>
          <p className="text-slate-700">{product.description}</p>
          <Buttons productId={product.id} />
        </div>
        <img src={product.image} className="w-1/3" alt="" />
      </div>
    </section>
  );
}

export default ProductPage;