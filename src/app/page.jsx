'use client';
import { Card, CardContent } from "@/components/ui/card"
 import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";


const categorias = [
  {
    name : "MarketPlace",
    link : "/products/page/0",
    description : "Compra o vende productos en tu Ciudad"
  },
  {
    name : "Servicios",
    link : "/services/page/0",
    description : "Busca u ofrece servicios en tu Ciudad"
  },
  {
    name : "Trabajos",
    link : "/jobs/page/0",
    description : "Encuentra trabajos o busca empleados en tu Ciudad"
  },
  {
    name : "Comunidad",
    link : "/community/page/0",
    description : "Solidaridad, objetos perdidos, etc..."
  },
]
 
export default function HomePage(){
  const [homeProducts, setHomeProducts] = useState()

  useEffect(()=>{
    const getProducts = async()=>{
      const productFound = await axios.get(`/api/products`,
        {
          params:{
            limit : 10
          }
        }
        );
        setHomeProducts(productFound.data[0])
        console.log(productFound.data[0])
    }
    getProducts()
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

    return(<>
        {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* Banner Carousel */}
      {/* <div className="mb-6">
        <Carousel images={bannerImages} />
      </div> */}

      {/* categorias */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categorias.map((categoria) => (
          <Link key={categoria.name} href={categoria.link} className=" hover:bg-purple-700">
            <Card >
              <CardContent className="p-4 flex flex-col items-center justify-center h-24 hover:bg-slate-300">
                <Link href={categoria.link} className="text-center font-bold text-lg">
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
             <Link href={`/products/${product.id}`} key={product.id} >
             <Card key={product.id}>
               <CardContent className="p-4 hover:bg-slate-200 hover:rounded-md">
                 <Image src={product.image} alt={product.name} width={400} height={400} className="rounded-sm mb-2" />
                 <div className="flex flex-row justify-between mx-1">
                   <p className="font-semibold">{product.name}</p>
                   <p className=" font-medium">{product.price ? product.price : "Precio no definido"}</p>
                 </div>
                 <p className="text-sm mx-1 text-gray-500 truncate">{product.description}</p>
                 {/* <Button onClick={addToCart} className="w-full mt-2">Agregar al carrito</Button> */}
               </CardContent>
             </Card>
           </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Categorías populares de Compra/Venta</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Autos', 'Tecnología', 'Electrodomésticos', 'Hogar y Muebles', 'Moda', 'Deportes y Fitness'].map((category) => (
            <Link href={`/products/type/${category}/0`} key={category} className=" hover:bg-purple-700">
            <Card>
              <CardContent className="p-4 flex items-center justify-center h-24 hover:bg-slate-300">
                <Link href={`/products/type/${category}/0`} className="text-center">{category}</Link>
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