'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { useParams } from "next/navigation"



export default function SearchResults({products}) {
  const params = useParams()
  console.log(params)

  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <aside className="w-full md:w-64 space-y-6">
            <div>
              <h2 className="font-semibold mb-2">Categorías</h2>
              <ul className="space-y-2">
                <li><Checkbox id="cat1" label="Electrónicos" />Electrónicos</li>
                <li><Checkbox id="cat2" label="Hogar y Muebles" />Hogar y Muebles</li>
                <li><Checkbox id="cat3" label="Ropa y Accesorios" />Ropa y Accesorios</li>
                <li><Checkbox id="cat4" label="Deportes y Fitness" />Deportes y Fitness</li>
              </ul>
            </div>


            <div>
              <h2 className="font-semibold mb-2">Envío</h2>
              <Checkbox id="freeShipping" label="Envío gratis" />
            </div>
          </aside>

          {/* Product List */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Resultados de búsqueda</h1>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Más Reciente</SelectItem>
                  <SelectItem value="price_asc">Menor precio</SelectItem>
                  <SelectItem value="price_desc">Mayor precio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {products.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <Card key={product.id}>
                    <CardContent className="p-4">
                      <img src={product.image} alt={product.name} className="w-full h-auto mb-2 rounded-sm" />
                      <div className="flex flex-row justify-between mx-1">
                        <p className="font-semibold">{product.name}</p>
                        <p className="font-semibold">{product.price}</p>
                      </div>
                      <p className="text-sm mx-1 text-gray-500 truncate">{product.description}</p>
                      {/* <Button onClick={addToCart} className="w-full mt-2">Agregar al carrito</Button> */}
                    </CardContent>
                  </Card>
                </Link>
              ))} 
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}