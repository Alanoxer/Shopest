'use client'
import { Button, buttonVariants  } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";


const categorias = [
  {
    name : "MarketPlace",
    description : "Compra o vende productos en tu Ciudad"
  },
  {
    name : "Servicios",
    description : "Busca u ofrece servicios en tu Ciudad"
  },
  {
    name : "Trabajos",
    description : "Encuentra trabajos o busca empleados en tu Ciudad"
  },
  {
    name : "Ayuda",
    description : "Solidaridad, objetos perdidos, etc..."
  },
]
 

export default function HomePage(){
  const [homeProducts, setHomeProducts] = useState()

  useEffect(()=>{
    const getUser = async()=>{
      const userFound = await axios.get(`/api/products`,
        {
          params:{
            limit : 10
          }
        }
        );
        setHomeProducts(userFound.data[0])
        console.log(userFound.data[0])
    }
    getUser()
  }, [])
  console.log(homeProducts)

    // const [cartItems, setCartItems] = useState(0)
    // const { toast } = useToast()
  
    // const addToCart = () => {
    //   setCartItems(cartItems + 1)
    //   toast({
    //     title: "Producto agregado al carrito",
    //     description: `Tienes ${cartItems + 1} producto(s) en tu carrito.`,
    //   })
    // }
  
    const bannerImages = [
      "/placeholder.svg?height=340&width=1184&text=Oferta 1",
      "/placeholder.svg?height=340&width=1184&text=Oferta 2",
      "/placeholder.svg?height=340&width=1184&text=Oferta 3",
    ]

    return(<>
        {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* Banner Carousel */}
      <div className="mb-6">
        <Carousel images={bannerImages} />
      </div>

      {/* Payment Methods */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categorias.map((categoria) => (
          <Link key={categoria.name} href={`${categoria.name}/page/0`} className=" hover:bg-purple-700">
            <Card >
              <CardContent className="p-4 flex flex-col items-center justify-center h-24 hover:bg-slate-300">
                <Link href={`${categoria.name}/page/0`} className="text-center font-bold text-lg">
                {categoria.name}
                </Link>
                <p className="text-center text-slate-500 text-md">{categoria.description}</p>
              </CardContent>
            </Card>
          </Link>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Ofertas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {homeProducts && homeProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <img src={product.image} alt={product.name} className="w-full h-auto mb-2" />
                <p className="font-semibold">${product.price}</p>
                <p className="font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500 truncate">{product.description}</p>
                <div className="w-full mt-4 mx-auto align-middle justify-center">
                <Link href={`/products/${product.id}`} className={buttonVariants({ variant: "outline w-full mt-4" })}>Ver Producto</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Categorías populares de Compra/Venta</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Autos', 'Tecnología', 'Electrodomésticos', 'Hogar y Muebles', 'Moda', 'Deportes y Fitness'].map((category) => (
            <Link href={`type/${category}/0`} key={category} className=" hover:bg-purple-700">
            <Card>
              <CardContent className="p-4 flex items-center justify-center h-24 hover:bg-slate-300">
                <Link href={`type/${category}/0`} className="text-center">{category}</Link>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
    )
}