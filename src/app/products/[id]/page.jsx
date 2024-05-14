import Image from "next/image";
import Buttons from "./Buttons";
import { conn } from "@/libs/mysql";



async function loadProduct(id) {
  
  const data = await conn.query(`SELECT * FROM product WHERE id = ?`,
  [id]);
  console.log(data[0])
  return data[0][0];
}

async function ProductPage({ params }) {
  const {id} = params
  const product = await loadProduct(id)
  return (
    <>
    <div class=" flex max-w-6xl rounded bg-gray-200 shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative text-left">
      <div>
        <div class="flex items-center -mx-10">
            <div class=" px-10 mb-10 md:mb-0">
                <div class="relative ">
                    <Image src={product.image}
                    height={300} width={300} class=" relative z-10 rounded-lg" alt={product.name}/>
                </div>
            </div>
        </div>
      </div>
      <div>
            <div class="w-full md:w-1/2 mx-14 my-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-3xl mb-5">{product.name}</h1>
                    <p class=" text-base">{product.description}</p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5 mb-4">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product.price}</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button class="bg-purple-600 opacity-75 hover:opacity-100 text-black hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </>
  );
}

export default ProductPage;