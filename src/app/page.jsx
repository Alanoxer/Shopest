import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link"
import axios from "axios";
import ProductCard from "./components/ProductCard";

const categorias = [
  {
    name : "MarketPlace",
    link : "/products/page/cualquiera/createdAt/0",
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

async function LoadProducts(){
  const products = await axios.get(`https://shopest-lyart.vercel.app/api/products`,
    {
      params:{
              limit : 10
      }
    }
    )
    const {data} = products
    if(data){
      return data[0]
    }
}


export default async function HomePage(){
  const products = await LoadProducts()

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
          {products && products.map((product) => (<ProductCard key={product.id} product={product}/>))}
        </div>
      </section>

      {/* Categorias de compra/venta */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Categorías populares de Compra/Venta</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Autos', 'Tecnología', 'Electrodomésticos', 'Hogar y Muebles', 'Moda', 'Deportes y Fitness'].map((category) => (
            <Link href={`/products/type/${category}/cualquiera/createdAt/0`} key={category} className=" hover:bg-purple-700">
            <Card>
              <CardContent className="p-4 flex items-center justify-center h-24 hover:bg-slate-300">
                <Link href={`/products/type/${category}/cualquiera/createdAt/0`} className="text-center">{category}</Link>
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