
import Link from "next/link";


export default function ProductCard( {product} ) {
  return (

  <Link href={`/products/${product.id}`} key={product.id}
  class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden ">
    <div class="px-4 py-2">
      <h1 class="text-gray-900 font-bold text-3xl uppercase">{product.name}</h1>
      <p class="text-gray-600 text-sm mt-1">{product.description}</p>
    </div>
    <img class="h-56 w-full object-cover mt-2" src={product.image} alt={product.name}/>
    <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
      <h1 class="text-gray-200 font-bold text-xl">${product.price}</h1>
      <button class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to Cart</button>
    </div>
  </Link>
    
  //   <Link

  //     href={`/products/${product.id}`}
  //   >
  //     <div class="relative flex w-full max-w-[40rem] flex-row rounded-xl bg-slate-700 bg-clip-border text-gray-700 shadow-md" key={product.id}>
  //         <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
  //         <img
  //         src={product.image}
  //         alt={product.name}
  //         class="h-full w-full object-cover"
  //         />
  //   </div>
  //   <div class="p-6">
  //     <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-slate-200 antialiased">
  //       {product.name}
  //     </h6>
  //     <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
  //      {product.description}
  //     </h4>
  //     <h2 className="text-lg text-slate-200 ml-8"> {product.price}$</h2>
  //   </div>
  // </div>
  //   </Link>
    
  );
}

