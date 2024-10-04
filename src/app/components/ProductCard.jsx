import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"

export default function ProductCard( {product} ) {
  return (
    <Link href={`/products/${product.id}`} key={product.id}>
      <Card key={product.id}>
        <CardContent className="p-4 hover:bg-slate-200 hover:rounded-md">
          <img src={product.image} alt={product.name} className="w-full h-auto mb-2 rounded-sm mb-2" />
          <div className="flex flex-row justify-between mx-1">
            <p className="font-semibold">{product.name}</p>
            <p className="font-semibold">{product.price ? product.price : "Precio no definido"}</p>
          </div>
          <p className="text-sm mx-1 text-gray-500 truncate">{product.description}</p>
          {/* <Button onClick={addToCart} className="w-full mt-2">Agregar al carrito</Button> */}
        </CardContent>
      </Card>
    </Link>
  );
}

