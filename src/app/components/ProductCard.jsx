import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";


export default function ProductCard( {product} ) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
      <Card key={product.id}>
        <CardContent className="p-4 hover:bg-slate-200 hover:rounded-md ">
          <Image src={product.image} alt={product.name} width={300} height={300} className=" h-96 w-full mb-2 rounded-sm" />
          <div className="flex flex-col justify-between">
            <p className="font-semibold truncate">{product.name}</p>
            <p className="font-semibold">{product.price ? product.price : "Precio no definido"}</p>
            <p className="text-sm mx-1 text-gray-500 truncate">{product.description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

