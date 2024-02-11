
import Link from "next/link";


export default function ProductCard({ product }) {
  return (
    <div>
    <Link
      className="bg-slate-700 rounded-lg border-gray-800 mb-3 hover:bg-gray-500 hover:cursor-pointer
       "
      href={`/products/${product.product_id}`}
    >
      {product.product_image && <img
      
      src={product.product_image} 
      className="w-full lg:h-60  rounded-t-lg" 
      alt={product.product_name} />}

      <div className="p-4">
        <div className="grid gap- grid-cols-2">
          <h1 className="text-lg font-bold">{product.product_name}</h1>
          <h2 className="text-lg  text-slate-200 ml-8">{product.product_price}$</h2>
        </div>
        
        <p>{product.product_description}</p>
      </div>
    </Link>
    </div>
  );
}

