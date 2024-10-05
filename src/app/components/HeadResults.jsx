"use client"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
  import { Button, buttonVariants } from "@/components/ui/button"
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Ordenar por <ChevronDown className=" h-4 w-10" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem >
                  <Link href={
                        p === `/products/page/${params.state}/price/${params.pagination}` 
                        ? `/products/page/${params.state}/createdAt/${params.pagination}` : null ||
                        p === `/products/type/${params.types}/${params.state}/price/${params.pagination}` 
                        ? `/products/type/${params.types}/${params.state}/createdAt/${params.pagination}` : null || 
                        p === `/products/subtype/${params.subtype}/${params.state}/$price/${params.pagination}` 
                        ? `/products/subtype/${params.subtype}/${params.state}/createdAt/${params.pagination}` : null ||  
                        p === `/products/search/${params.keyword}/${params.state}/price/${params.pagination}` 
                        ? `/products/search/${params.keyword}/${params.state}/createdAt/${params.pagination}` 
                        : ""}
                  >
                    Más Reciente
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem>
                  <Link href={
                            p === `/products/page/${params.state}/createdAt/${params.pagination}` 
                            ? `/products/page/${params.state}/price/${params.pagination}` : null ||
                            p === `/products/type/${params.types}/${params.state}/createdAt/${params.pagination}` 
                            ? `/products/type/${params.types}/${params.state}/price/${params.pagination}` : null || 
                            p === `/products/subtype/${params.subtype}/${params.state}/createdAt/${params.pagination}` 
                            ?`/products/subtype/${params.subtype}/${params.state}/price/${params.pagination}` : null ||  
                            p === `/products/search/${params.keyword}/${params.state}/createdAt/${params.pagination}` 
                            ? `/products/search/${params.keyword}/${params.state}/price/${params.pagination}` : ""}
                  >
                    Menor Precio
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="items-center">
                    <Link href={
                    p === `/products/page/${params.state}/price/${params.pagination}` 
                    ? `/products/page/${params.state}/createdAt/${params.pagination}` : null ||
                    p === `/products/type/${params.types}/${params.state}/price/${params.pagination}` 
                    ? `/products/type/${params.ty pes}/${params.state}/createdAt/${params.pagination}` : null || 
                    p === `/products/subtype/${params.subtype}/${params.state}/$price/${params.pagination}` 
                    ? `/products/subtype/${params.subtype}/${params.state}/createdAt/${params.pagination}` : null ||  
                    p === `/products/search/${params.keyword}/${params.state}/price/${params.pagination}` 
                    ? `/products/search/${params.keyword}/${params.state}/createdAt/${params.pagination}` 
                    : "#"}
                    >
                        Más Reciente
                    </Link>
                  
                  </SelectItem>
                  <SelectItem value="price_asc">
                    <Link href={
                        p === `/products/page/${params.state}/createdAt/${params.pagination}` 
                        ? `/products/page/${params.state}/price/${params.pagination}` : null ||
                        p === `/products/type/${params.types}/${params.state}/createdAt/${params.pagination}` 
                        ? `/products/type/${params.types}/${params.state}/price/${params.pagination}` : null || 
                        p === `/products/subtype/${params.subtype}/${params.state}/createdAt/${params.pagination}` 
                        ?`/products/subtype/${params.subtype}/${params.state}/price/${params.pagination}` : null ||  
                        p === `/products/search/${params.keyword}/${params.state}/createdAt/${params.pagination}` 
                        ? `/products/search/${params.keyword}/${params.state}/price/${params.pagination}` : "#"}
                    >
                        Menor Precio
                    </Link>
                  </SelectItem>
                </SelectContent>
            </Select>
             */}
            </div>
    )
}