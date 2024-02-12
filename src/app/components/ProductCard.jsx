
import Link from "next/link";


export default function ProductCard({ product }) {
  return (
    
    <Link
      className="bg-slate-700 rounded-lg border-gray-800 mb-3 hover:bg-gray-500 hover:cursor-pointer
       "
      href={`/products/${product.id}`}
    >
      {product.image && <img
      
      src={product.image} 
      className="w-full lg:h-60  rounded-t-lg" 
      alt={product.name} />}

      <div className="p-4">
        <div className="grid gap- grid-cols-2">
          <h1 className="text-lg font-bold">{product.name}</h1>
          <h2 className="text-lg  text-slate-200 ml-8">{product.price}$</h2>
        </div>
        
        <p>{product.description}</p>
      </div>
    </Link>
    
  );
}

