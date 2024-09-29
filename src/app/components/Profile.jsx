"use client"
import Link from "next/link"
import Image from "next/image"
import { CalendarDays, MapPin, Link as LinkIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Profile({user, userProducts}){

  const data = user?.createdAt
  const date = new Date(data)
  const fecha = date.toLocaleDateString("en")

    return (
      <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/user.png"
                  alt="User profile"
                  className="rounded-full w-32 h-32 md:w-64 md:h-64 object-cover"
                />
              </div>
              <div className="flex-grow">

                <h1 className="text-2x md:text-4xl font-bold mb-2">
                {user?.name ? user.name : "..."}
                </h1>

                <p className="text-lg mb-6">
                 {user?.description ? user.description : "..."}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>San Carlos de Bariloche - Rio Negro - Argentina</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <Link href="https://janedoe.com" className="hover:underline">
                     {user?.number_phone ? user.number_phone : "no number phone"}
                    </Link>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>
                      Creó su cuenta el: {user?.createdAt ? fecha : "no date"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Actividad Reciente</h2>
              <div className="bg-muted p-4 rounded-lg">
              {
              userProducts?.length !== 0 
              ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                { userProducts?.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id} >
                <Card>
                  <CardContent className="p-4 hover:bg-slate-200 hover:rounded-md">
                    <Image src={product.image} alt={product.name} width={400} height={200} className="rounded-sm mb-2" />
                    <div className="flex flex-row justify-between mx-1">
                      <p className="font-semibold">{product.name}</p>
                      <p className=" font-medium">{product.price ? product.price : "Precio no definido"}</p>
                    </div>
                    <p className="text-sm mx-1 text-gray-500 truncate">{product.description}</p>
                  </CardContent>
                </Card>
                </Link>
                ))}
               </div>
              : <p>No hay productos publicados... </p>
              }
              </div>
            </div>
          </div>
        </div>
    ) 
}

