'use client'
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'
import Link from "next/link"


export default function SingleProduct({product, relatedProducts, seller}) {
  // const [currentImage, setCurrentImage] = useState(0)
  // const [quantity, setQuantity] = useState(1)

  // const nextImage = () => {
  //   setCurrentImage((prev) => (prev + 1) % product.images.length)
  // }

  // const prevImage = () => {
  //   setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-2/3">
            <div className="relative">
              <Image src={product.image} height={300} width={300}
                // [currentImage]} 
              alt={product.name} className="w-full object-cover h-2/3" />
              
              <Button variant="ghost" size="icon" className="absolute top-1/2 left-4 transform -translate-y-1/2" 
              // onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button variant="ghost" size="icon" className="absolute top-1/2 right-4 transform -translate-y-1/2" 
              // onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

            </div>
            <div className="flex justify-center mt-4 space-x-2">
             
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/3 space-y-6">

            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h3 className=" text-lg font-semibold mt-4 border-2 border-l-4 border-b-4 border-slate-300 inline-block px-2 py-1">
                {product.state}
              </h3>
            </div>

            <div>
              <span className="text-3xl font-bold">${product.price}</span> 
            </div>
            <div className="rounded-md w-full justify-center mt-1">
              <Link href={`/profile/user/1`} className="bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 p-2 rounded-md w-full">Contactar con el vendedor</Link>
            </div>

            {/* Product Details */}
          <div className="mt-12">
            <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="user">Descripción del vendedor</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>{product.description}</p>
            </TabsContent>
             <TabsContent value="user" className="mt-4">
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-semibold w-1/3">Nombre:</span>
                  <span>{seller.name}</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-1/3">Locación:</span>
                  <span>San Carlos de Bariloche</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-1/3">Número de celular:</span>
                  <span>{seller.number_phone}</span>
                </li>
              </ul>
            </TabsContent> 
            </Tabs>
          </div>

          </div>
        </div>

        {/* Product Details */}


        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id}>
                <CardContent className="p-4">
                  <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-92 object-cover mb-4" />
                  <h3 className="font-semibold text-lg">{relatedProduct.name}</h3>
                  <p className="text-lg font-bold">${relatedProduct.price}</p>
                  <p className="text-md text-gray-500 truncate">{relatedProduct.description}</p>
                  <div className="p-2 rounded-md w-full justify-center mt-1">
                    <Link href={`/products/${relatedProduct.id}`} className="bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 p-2 rounded-md w-full">Ver Producto</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}