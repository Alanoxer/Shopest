"use client"
import Link from "next/link"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { buttonVariants } from "@/components/ui/button"
  import { useParams, usePathname } from "next/navigation"
  
export default function HeadResults(){
    const params = useParams()
    const p = usePathname()
    return(
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">
              { p === `/services/page/${params.pagination}` ? `Servicios en tu ciudad` : null || p === `/jobs/page/${params.pagination}` ? `Trabajos en tu ciudad` : null || p === `/community/page/${params.pagination}` ? `Comunidad` : "Productos a la venta en tu ciudad"}
              </h1>

              <Link href=
              { 
                p === `/services/page/${params.pagination}` 
                ? `/services/new` : null || 
                p === `/jobs/page/${params.pagination}` 
                ? `/jobs/new` : null || 
                p === `/community/page/${params.pagination}` 
                ? `/community/new` : "/products/new"} 
              className={buttonVariants({ variant: "default" })}
              >
                { 
                p === `/services/page/${params.pagination}` ? `Publica un servicio en tu ciudad` : null || 
                p === `/jobs/page/${params.pagination}` ? `Publica un puesto de trabajo en tu ciudad` : null || 
                p === `/community/page/${params.pagination}` ? `Publica un artículo en tu ciudad` : "Publica un producto para vender en tu ciudad"}
              </Link>

            {
            (<Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mas reciente">
                    <Link href={
                    p === `/products/page/${params.state}/${params.orderby}/${params.pagination}` 
                    ? `/products/page/${params.state}/createdAt/${params.pagination}` : null ||
                    p === `/products/type/${params.types}/${params.state}/${params.orderby}/${params.pagination}` 
                    ? `/products/type/${params.types}/${params.state}/createdAt/${params.pagination}` : null || 
                    p === `/products/subtype/${params.subtype}/${params.state}/${params.orderby}/${params.pagination}` 
                    ? `/products/subtype/${params.subtype}/${params.state}/createdAt/${params.pagination}` : null ||  
                    p === `/products/search/${params.keyword}/${params.state}/${params.orderby}${params.pagination}` 
                    ? `/products/search/${params.keyword}/${params.state}/createdAt/${params.pagination}` 
                    : "#"}
                    >
                        Más Reciente
                    </Link>
                  </SelectItem>
                  <SelectItem value="price_asc">
                    <Link href={
                        p === `/products/page/${params.state}/${params.orderby}/${params.pagination}` 
                        ? `/products/page/${params.state}/price/${params.pagination}` : null ||
                        p === `/products/type/${params.types}/${params.state}/${params.orderby}/${params.pagination}` 
                        ? `/products/type/${params.types}/${params.state}/price/${params.pagination}` : null || 
                        p === `/products/subtype/${params.subtype}/${params.state}/${params.orderby}/${params.pagination}` 
                        ?`/products/subtype/${params.subtype}/${params.state}/price/${params.pagination}` : null ||  
                        p === `/products/search/${params.keyword}/${params.state}/${params.orderby}${params.pagination}` 
                        ? `/products/search/${params.keyword}/${params.state}/price/${params.pagination}` : "#"}
                    >
                        Menor Precio
                    </Link>
                  </SelectItem>
                </SelectContent>
            </Select>)
            }
            </div>
    )
}