'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
import { Search, Heart, ShoppingCart, Truck, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from 'next/image'

// const product = {
//   name: "Smartphone XYZ Ultra Pro",
//   price: 999.99,
//   discount: 15,
//   rating: 4.7,
//   reviews: 1234,
//   sold: 5000,
//   freeShipping: true,
//   images: [
//     "/placeholder.svg?height=500&width=500&text=Smartphone 1",
//     "/placeholder.svg?height=500&width=500&text=Smartphone 2",
//     "/placeholder.svg?height=500&width=500&text=Smartphone 3",
//   ],
//   description: "El Smartphone XYZ Ultra Pro es el último modelo de la serie XYZ, con características avanzadas como una cámara de alta resolución, batería de larga duración y un potente procesador.",
//   specs: [
//     { name: "Pantalla", value: "6.7 pulgadas OLED" },
//     { name: "Procesador", value: "Octa-core 2.8 GHz" },
//     { name: "RAM", value: "8 GB" },
//     { name: "Almacenamiento", value: "256 GB" },
//     { name: "Batería", value: "5000 mAh" },
//   ],
// }

export default function SingleProduct({product}) {
  // const [currentImage, setCurrentImage] = useState(0)
  // const [quantity, setQuantity] = useState(1)

  const relatedProducts = [
    { id: 1, name: "Funda para Smartphone XYZ", price: 19.99, image: "/placeholder.svg?height=200&width=200&text=Funda" },
    { id: 2, name: "Cargador Rápido XYZ", price: 29.99, image: "/placeholder.svg?height=200&width=200&text=Cargador" },
    { id: 3, name: "Auriculares Bluetooth XYZ", price: 79.99, image: "/placeholder.svg?height=200&width=200&text=Auriculares" },
  ]

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
              alt={product.name} className="w-full" />
              
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
              {/* {product.images.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentImage ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentImage(index)}
                >
                  {index + 1}
                </Button>
              ))} */}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/3 space-y-6">

            <div>
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <h3 className=" text-lg font-semibold mt-4 border-2 border-l-4 border-b-4 border-slate-300 inline-block px-2 py-1">{product.state}</h3>
              {/* <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1">
                    5.0{product.rating}
                  </span>
                </div>
                <span className="text-gray-500">
                  Opiniones  ({product.reviews} opiniones)
                </span>
                <span className="text-gray-500">
                  Vendidos  {product.sold} vendidos
                </span>
              </div> */}
            </div>

            <div>
              <span className="text-3xl font-bold">${product.price}</span>
              {/* {product.discount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {product.discount}% OFF
                </Badge>
              )}
              {product.freeShipping && (
                <div className="flex items-center text-green-600 mt-2">
                  <Truck className="h-4 w-4 mr-1" />
                  <span className="text-sm">Envío gratis</span>
                </div>
              )} */}
            </div>

            {/* Product Details */}
          <div className="mt-12">
            <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Descripción</TabsTrigger>
              {/* <TabsTrigger value="specs">Características</TabsTrigger> */}
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p>{product.description}</p>
            </TabsContent>
            {/* <TabsContent value="specs" className="mt-4">
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex">
                    <span className="font-semibold w-1/3">{spec.name}:</span>
                    <span>{spec.value}</span>
                  </li>
                ))}
              </ul>
            </TabsContent> */}
            </Tabs>
          </div>

            {/* <div className="flex items-center space-x-4">
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20"
              />
              <Button className="flex-grow">
                <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al carrito
              </Button>
            </div>
              <Button variant="outline" className="w-full">
                <Heart className="mr-2 h-4 w-4" /> Agregar a favoritos
              </Button> */}
            {/* <div className="flex items-center text-sm text-gray-500">
              <Shield className="h-4 w-4 mr-2" />
              <span>Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.</span>
            </div> */}
          </div>
        </div>

        {/* Product Details */}


        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Productos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedProducts.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                  <Button className="w-full mt-4">Ver producto</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}